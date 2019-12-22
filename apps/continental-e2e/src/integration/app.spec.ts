import { inputText, visitHome, visitRegionDescription, RegionDescriptionTitle} from '../support/app.po';

describe('continental', () => {
  beforeEach(() => visitHome());

  it('should display an input span', () => {
    inputText().contains('Ver sólo las que tengan id');
  });

});

describe('region description', () => {
  beforeEach(() => visitRegionDescription());

  it('should display an h1', () => {
    RegionDescriptionTitle().contains('Datos báscisos de un continente');
  });

});
