# Generated by Django 3.1.5 on 2021-02-02 13:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0008_auto_20210202_1450'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='studynote',
            name='topic',
        ),
        migrations.AddField(
            model_name='subtopic',
            name='notes',
            field=models.ManyToManyField(blank=True, to='courses.StudyNote'),
        ),
    ]
