# Generated by Django 5.0.4 on 2024-07-16 15:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Video',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('embed_code', models.TextField()),
                ('name', models.CharField(max_length=20)),
                ('description', models.TextField()),
                ('views', models.PositiveIntegerField()),
                ('date', models.DateTimeField()),
            ],
        ),
    ]
