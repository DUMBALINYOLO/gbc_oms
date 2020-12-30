from django.db import models
from solo.models import SingletonModel


class FeesConfig(SingletonModel):
    default_invoice_comments = models.TextField(blank=True)
    default_quotation_comments = models.TextField(blank=True)
    default_terms = models.TextField(blank=True)
    tax = models.ForeignKey('accounts.Tax', on_delete=models.SET_NULL,
        null=True, blank="True")
    include_tax_in_invoice = models.BooleanField(default=True)
    include_units_in_fees_invoice = models.BooleanField(default=True)
    use_combined_invoice = models.BooleanField(default=True)
    is_configured = models.BooleanField(default=False)


    def __str__(self):
        return f'Fees Payment Settings: {self.id}'


