from django.db import models
from basedata.models import SoftDeletionModel
from basedata.constants import (
                        FEES_TARGETS_CHOICES,
                        FEES_TYPE_CHOICES 
                    )


class Fee(SoftDeletionModel):
    name = models.CharField(max_length=300)
    targets = models.CharField(max_length=200, choices=FEES_TARGETS_CHOICES)
    type = models.CharField(max_length=200, choices=FEES_TYPE_CHOICES)
    amount = models.DecimalField(max_digits=16, blank=True, decimal_places=2, default=0.0)

    def __str__(self):
        return f'{self.name} {self.amount}'




