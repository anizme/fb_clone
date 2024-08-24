from django.db import models

# Create your models here.
class Account(models.Model):
    email_phone = models.CharField(blank=False, null=False, max_length=120)
    password = models.TextField(blank=False, null=False)

    def __str__(self):
        return self.email_phone