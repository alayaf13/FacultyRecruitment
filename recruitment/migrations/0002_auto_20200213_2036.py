# Generated by Django 2.2.4 on 2020-02-13 15:06

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('recruitment', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='academic_detail',
            name='area_of_qualification',
            field=models.CharField(default='cs', max_length=200),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='academic_detail',
            name='degree',
            field=models.CharField(default='cs', max_length=200),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='academic_detail',
            name='institute',
            field=models.CharField(default='iiit', max_length=200),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='applicant',
            name='date',
            field=models.DateField(default=datetime.datetime(2020, 2, 13, 15, 5, 52, 479591, tzinfo=utc)),
        ),
    ]
