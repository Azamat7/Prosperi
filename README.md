# Prosperi
The app was written on React + tailwind on the frontend and Django REST Framework on the backend. Everything is wrapped in Docker.

## Hosted version

#### You can access the web application hosted on DigitalOcean: http://157.245.66.7/ (no longer the case)


## Usage

#### 1. Clone repository
    git clone https://github.com/Azamat7/Prosperi.git

#### 2. Run the App with docker-compose (easiest way)
    docker-compose up -d

#### 2. Run the App locally 
##### Environment variables
You need to set environemnt variables in order to run the application.
docker-compose.yaml file has an example variables for running the app locally.

For prosperi_frontend: 

    REACT_APP_HOST_IP_ADDRESS

For prosepri_backend

    DJANGO_ALLOWED_HOSTS
    DJANGO_SECRET_KEY
    DJANGO_CORS_ORIGIN_WHITELIST

##### Install dependencies in prosperi_frontend and start
    yarn install
    npm start

   ##### Install dependencies in prosperi_backend, run migrations, start
    pip install -r requirements.txt
    python manage.py makemigrations
    python manage.py migrate
   
App will be opened in browser at http://localhost:3000/

## A/B experiment logic
In the frontend we have the code to retrieve the price for the given user. It checks the localStorage if there is a uuid item stored. uuid is used to uniquely identify the user. If there is a uuid, we call the backend to retrieve the price assigned for the given user. If there is no uuid, it means the user is trying to access the app for the first time (or cleared the localStorage manually), so we need to get a new price for the user:

    const getPrice = async () => {
	    let uuid = window.localStorage.getItem('uuid');
		if (!uuid) {
			uuid = uuidv4();
			window.localStorage.setItem('uuid', uuid)
		}
		return await axios.get(`${process.env.REACT_APP_HOST_IP_ADDRESS}/api/price/${uuid}`)
			.then(response => {
				return response.data.price
			})
			.catch(err => {
				console.log(err)
			}
		);
	};

In the backend we check if we already have a price for the given uuid. If that is the case, we just return the price. If not, we need to assign a new price for the given uuid. In order to do so, we count the number of people assigned into A and B buckets and give the price of the bucket which has less users. This way, we can make sure that the distribution stays even. (Actually, it keeps assigning values in the following order: B, A, B, A, B, A...)

    class PriceExperimentService(object):
	    @staticmethod
	    def get_price(pk):
		    user = Bucket.objects.filter(uuid = pk).first()
		    if user:
			    return user
			
			bucket_a_count = Bucket.objects.filter(price = BucketTypes.A.value).count()
			bucket_b_count = Bucket.objects.filter(price = BucketTypes.B.value).count()
			price = BucketTypes.A if bucket_a_count < bucket_b_count else BucketTypes.B
				
			new_user = Bucket(uuid=pk, price=price)
			new_user.save()
			return new_user

## Notes

 - Initially, I wanted to use the "random" library of python to assign
   the price for the user. Since it is random, I was hoping to get the
   50-50 distribution. However, it turned out that wasn't the case. The distribution was around 52-48, 53-47 or sometimes even went to 60-40 for a sample size of 1000 people. That is why I decided to actually count the number of users assigned to each bucket
  
- Counting users assigned for each bucket could be pretty resourceful, so the query could be improved. Indexing bucket type could be one of the solutions
- There are still many improvements to be done. Styling classes look like a mess now, might need some refactoring. Database is relying on sqlite, we could add a proper database server for this. 
