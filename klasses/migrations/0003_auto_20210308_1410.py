# Generated by Django 3.1.5 on 2021-03-08 12:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('people', '0001_initial'),
        ('klasses', '0002_auto_20210201_1054'),
    ]

    operations = [
        migrations.AlterField(
            model_name='studentclass',
            name='class_teacher',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='people.teacherprofile'),
        ),
    ]