# Generated by Django 5.0.4 on 2024-06-11 15:43

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('img', models.ImageField(upload_to='images/')),
                ('name', models.CharField(max_length=20)),
                ('description', models.TextField()),
                ('likes', models.PositiveIntegerField()),
            ],
        ),
    ]
