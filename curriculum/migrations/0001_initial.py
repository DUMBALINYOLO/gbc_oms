# Generated by Django 3.1.4 on 2020-12-27 06:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AddCourseToSubject',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('active', models.BooleanField(default=True)),
                ('date', models.DateField(auto_now_add=True)),
                ('status', models.CharField(choices=[('add', 'ADDED'), ('remove', 'REMOVED')], max_length=200)),
            ],
            options={
                'verbose_name_plural': 'AddCourseToSubject',
            },
        ),
        migrations.CreateModel(
            name='Curriculum',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('active', models.BooleanField(default=True)),
                ('name', models.CharField(max_length=68)),
                ('code', models.CharField(blank=True, max_length=68, null=True)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='KlassStudiedSubject',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('active', models.BooleanField(default=True)),
                ('status', models.CharField(choices=[('studied', 'STUDIED'), ('unstudied', 'NOT STUDIED')], max_length=200)),
            ],
            options={
                'verbose_name_plural': 'KlassStudiedSubjects',
            },
        ),
        migrations.CreateModel(
            name='StudentStudySubject',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('active', models.BooleanField(default=True)),
                ('status', models.CharField(choices=[('studied', 'STUDIED'), ('unstudied', 'NOT STUDIED')], max_length=200)),
            ],
            options={
                'verbose_name_plural': 'StudentStudySubjects',
            },
        ),
        migrations.CreateModel(
            name='Subject',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('active', models.BooleanField(default=True)),
                ('name', models.CharField(max_length=68)),
                ('subject_code', models.CharField(blank=True, max_length=90, null=True)),
                ('curriculum', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='subjects', to='curriculum.curriculum')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]