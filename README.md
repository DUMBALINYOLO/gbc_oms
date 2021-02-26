# gbc_oms
GERERE BUSINESS COLLEGE ONLINE MANAGEMENT SYSTEM

cpu time per day 6000s
number of web apps 3
number of workers 2
number of always on task 3
disk space 9gb
postgress server enabled
postgress disk space (2gb)
bill for 4 months

# byocc_flexweigh
bulawayo city council weighbride

https://www.pluralsight.com/guides/using-web-sockets-in-your-reactredux-app

docker run -p 6379:6379 -d redis:5
celery -A bcc worker -l info --without-gossip --without-mingle --without-heartbeat -Ofair --pool=solo
celery -A bcc beat -l INFO


from __future__ import unicode_literals, absolute_import
from celery import shared_task
from asgiref.sync import async_to_sync
from channels.layers import get_channel_layer
from weighing.models import ScaleConfig
import random


channel_layer = get_channel_layer()

@shared_task
def get_weight():

    configuration = ScaleConfig.objects.first()
    weight = configuration.default_scale.get_weight()
    async_to_sync(channel_layer.group_send)(
                                    'scale_weight', {
                                    'type': 'broadcast_weight',
                                    'text': weight
                                }
                            )


@shared_task
def add(b=2, c=8):
    return b + c

@shared_task
def sub(b=2, c=8):
    return b - c


@shared_task
def mul(b=2, c=8):
    return b * c


    import asyncio
    from channels.generic.websocket import AsyncWebsocketConsumer


    class ScaleWeightSubscribingandBroadcastingConsumer(AsyncWebsocketConsumer):

        async def connect(self):
            await self.channel_layer.group_add('scale_weight', self.channel_name)
            await self.accept()

        async def disconnect(self, close_code):
            await self.channel_layer.group_discard('scale_weight', self.channel_name)

        async def broadcast_weight(self, event):
            text_message = event['text']
            encoded_weight = str(text_message)
            await self.send(encoded_weight)


            from __future__ import unicode_literals, absolute_import
            import os
            from django.conf import settings
            from celery import Celery

            # set the default Django settings module for the 'celery' program.
            os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'bcc.settings')

            app = Celery('bcc')

            # Using a string here means the worker doesn't have to serialize
            # the configuration object to child processes.
            # - namespace='CELERY' means all celery-related configuration keys
            #   should have a `CELERY_` prefix.
            app.config_from_object('django.conf:settings',namespace='CELERY')

            app.conf.beat_schedule = {
                'get_weights': {
                    "task": "weighing.tasks.get_weight",
                    "schedule": 0.1
                }

            }

            # Load task modules from all registered Django app configs.
            app.autodiscover_tasks(lambda: settings.INSTALLED_APPS)



            CELERY_BROKER_URL = 'redis://localhost:6379'
            # BROKER_URL = 'django://'
            CELERY_ACCEPT_CONTENT = ['json']
            CELERY_TASK_SERIALIZER = 'json'
            CELERY_RESULT_SERIALIZER = 'json'
            CELERY_BROKER_POOL_LIMIT = 1
            CELERY_BROKER_CONNECTION_TIMEOUT = 10

            CELERY_ENABLE_UTC = True
            CELERY_TIMEZONE = 'UTC'
            CELERY_DEFAULT_QUEUE = 'default'


            CELERY_ALWAYS_EAGER = False
            CELERY_ACKS_LATE = True
            CELERY_TASK_PUBLISH_RETRY = True
            CELERY_DISABLE_RATE_LIMITS = False



            import os
            from channels.auth import AuthMiddlewareStack
            from django.core.asgi import get_asgi_application
            from channels.routing import ProtocolTypeRouter,URLRouter
            from .routing import websocket_urlpatterns

            os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'bcc.settings')

            application =  ProtocolTypeRouter ({
                'http': get_asgi_application(),
                'websocket': AuthMiddlewareStack (URLRouter(websocket_urlpatterns))
            })

            from channels.routing import ProtocolTypeRouter,URLRouter


            from django.urls import path
            from weighing import consumer



            websocket_urlpatterns=[
                path('ws/weightData/',consumer.ScaleWeightSubscribingandBroadcastingConsumer.as_asgi()),
            ]


            from __future__ import unicode_literals, absolute_import
            from .celery import app as celery_app

            __all__ = ('celery_app', )
