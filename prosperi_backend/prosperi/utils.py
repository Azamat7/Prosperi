from enum import IntEnum

class BucketTypes(IntEnum):
  A = 10
  B = 20
  
  @classmethod
  def choices(cls):
    return [(key.value, key.name) for key in cls]