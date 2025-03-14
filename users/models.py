from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    avatar = models.ImageField(upload_to='avatars/', default='default_profile_icon.svg')
    header = models.ImageField(upload_to='headers/', default='header/default.jpg')
    bio = models.TextField(blank=True, default="Your bio here...")

    class Meta:
        managed = True
        db_table = 'Users'

    def __str__(self) -> str:
        return self.username
