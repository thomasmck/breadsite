# Generated by Django 2.0.1 on 2018-05-14 18:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0003_temperature'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blogpost',
            name='author',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='author.Author'),
        ),
        migrations.DeleteModel(
            name='Author',
        ),
    ]
