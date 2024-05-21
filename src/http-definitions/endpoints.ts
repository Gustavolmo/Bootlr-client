export const apiUrl = (endPoint: 'local' | 'prod' = 'local') => {
  if (endPoint === 'local') {
    return {
      bootlrSearch: 'http://localhost:4000/bootlr-search',
      bootlrChat: 'http://localhost:4000/bootlr-chat',
      bootlrOffers: 'http://localhost:4000/bootlr-offers',
      bootlrLogVisitor: 'http://localhost:4000/bootlr-log-visitor',
      bootlrLogProductClick: 'http://localhost:4000/bootlr-log-product-click',
    };
  } else {
    return {
      bootlrSearch: 'https://staging-bootlr-99p2.encr.app/bootlr-search',
      bootlrChat: 'https://staging-bootlr-99p2.encr.app/bootlr-chat',
      bootlrOffers: 'https://staging-bootlr-99p2.encr.app/bootlr-offers',
      bootlrLogVisitor: 'https://staging-bootlr-99p2.encr.app/bootlr-log-visitor',
      bootlrLogProductClick: 'https://staging-bootlr-99p2.encr.app/bootlr-log-product-click',
    };
  }
};
