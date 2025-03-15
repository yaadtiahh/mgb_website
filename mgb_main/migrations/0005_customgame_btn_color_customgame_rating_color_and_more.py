# Generated by Django 5.1.6 on 2025-03-15 00:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mgb_main', '0004_alter_customgame_api_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='customgame',
            name='btn_color',
            field=models.CharField(default='FF003C', max_length=7),
        ),
        migrations.AddField(
            model_name='customgame',
            name='rating_color',
            field=models.CharField(default='white', max_length=7),
        ),
        migrations.AddField(
            model_name='customgame',
            name='rating_game',
            field=models.IntegerField(default=6),
        ),
    ]
