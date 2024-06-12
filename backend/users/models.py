from django.db import models

# Create your models here
# Users -> id, name, email, gender
class User(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    gender = models.CharField(max_length=255)
    number = models.CharField(max_length=255, default='56789045')


    def __str__(self):
        return self.name
