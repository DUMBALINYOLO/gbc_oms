# Generated by Django 3.1.5 on 2021-02-02 05:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0004_auto_20210201_1447'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='review',
            name='course',
        ),
        migrations.RemoveField(
            model_name='subtopic',
            name='topic',
        ),
        migrations.RemoveField(
            model_name='topic',
            name='course',
        ),
        migrations.AddField(
            model_name='course',
            name='reviews',
            field=models.ManyToManyField(blank=True, to='courses.Review'),
        ),
        migrations.AddField(
            model_name='course',
            name='topics',
            field=models.ManyToManyField(blank=True, to='courses.Topic'),
        ),
        migrations.AddField(
            model_name='topic',
            name='subtopics',
            field=models.ManyToManyField(blank=True, to='courses.SubTopic'),
        ),
    ]
