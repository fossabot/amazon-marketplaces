import {
  AmazonMarketplace,
  AmazonMarketplaceAdvertisingCountryCode,
  AmazonMarketplaceAdvertisingCurrency,
  AmazonMarketplaceAdvertisingTimeZone,
  AmazonMarketplaceCountryCode,
} from '../amazon-marketplace'
import { marketplaceAdvertisingRegions } from '../marketplace-advertising-regions'
import { sellerCentralAuthUris, sellingPartnerRegions } from '../selling-partner-api-regions'

/**
 * Canada
 */
export const CA = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.CA,
  currency: AmazonMarketplaceAdvertisingCurrency.CAD,
  id: 'A2EUQ1WTGCTBG2',
  name: 'Canada',
  uri: 'https://www.amazon.ca',
  webServiceUri: 'https://mws.amazonservices.ca',
  sellerCentralUri: 'https://sellercentral.amazon.ca',
  advertising: {
    countryCode: AmazonMarketplaceAdvertisingCountryCode.CA,
    region: marketplaceAdvertisingRegions.NA,
    bids: {
      sponsoredBrands: {
        min: 10,
        max: 4900,
      },
      sponsoredProducts: {
        min: 2,
        max: 100000,
      },
    },
    timeZone: AmazonMarketplaceAdvertisingTimeZone.AMERICA_LOS_ANGELES,
  },
  sellingPartner: {
    region: sellingPartnerRegions.NA,
    sellerCentralAuthUri: sellerCentralAuthUris.NA,
  },
})
