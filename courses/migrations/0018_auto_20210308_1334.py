# Generated by Django 3.1.5 on 2021-03-08 11:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0017_auto_20210209_1142'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='created',
            field=models.DateField(auto_now_add=True),
        ),
    ]