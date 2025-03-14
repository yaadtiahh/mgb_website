# Generated by Django 5.1.6 on 2025-03-14 06:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mgb_main', '0002_alter_custommovie_image'),
    ]

    operations = [
        migrations.CreateModel(
            name='CustomGame',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('api_id', models.CharField(help_text='ID фильма из API', max_length=100, unique=True)),
                ('title', models.CharField(max_length=255)),
                ('background_game', models.ImageField(blank=True, null=True, upload_to='static/imgs/games_images', verbose_name='Бг Игры')),
                ('logotype_game', models.ImageField(blank=True, null=True, upload_to='static/imgs/games_images', verbose_name='Лого игры')),
                ('description', models.TextField(blank=True)),
                ('release_date', models.DateField()),
            ],
        ),
    ]
