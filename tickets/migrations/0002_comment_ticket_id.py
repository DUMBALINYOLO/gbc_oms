# Generated by Django 3.2.4 on 2021-08-04 19:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tickets', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='comment',
            name='ticket_id',
            field=models.IntegerField(default=0),
        ),
    ]
