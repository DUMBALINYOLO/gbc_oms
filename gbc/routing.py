from channels.routing import ProtocolTypeRouter,URLRouter
from channels.auth import AuthMiddlewareStack

from django.urls import path
from weighing import consumer

websocket_urlPattern=[
    path('ws/polData/',consumer.ScaleWeightConsumer),
]

application=ProtocolTypeRouter({
    # 'http':
    'websocket':AuthMiddlewareStack(URLRouter(websocket_urlPattern))

})
