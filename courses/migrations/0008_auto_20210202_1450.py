# Generated by Django 3.1.5 on 2021-02-02 12:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0007_auto_20210202_1324'),
    ]

    operations = [
        migrations.AddField(
            model_name='file',
            name='note_id',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='image',
            name='note_id',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='referrencesource',
            name='note_id',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='review',
            name='course_id',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='studynote',
            name='subtopic_id',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='subtopic',
            name='topic_id',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='text',
            name='note_id',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='topicguideline',
            name='topic_id',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='topicobjective',
            name='topic_id',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='video',
            name='note_id',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]