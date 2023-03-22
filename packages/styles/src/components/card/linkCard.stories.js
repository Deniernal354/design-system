export default {
  title: 'Patterns/Card/Link Card',
  parameters: {
    layout: 'centered'
  }
};

const LinkCardTemplate = ({ title, ...args }) => {
  return `
    <div href="#" class="cbp-card" data-component="link-card">
      <div class="cbp-card__content">
        <div class="cbp-card__header">
          <h4 class="cbp-card__title"><i class="fas fa-info"></i>${title}</h4>
          <i class="fas fa-arrow-circle-right"></i>
        </div>
        <p class="cbp-text-body cbp-mt-2">Here is an example of some supplementary text for this purely informational card</p>
      </div>
    </div>
  `;
};

const LinkCardMediaTemplate = ({ title, type }) => {
  return `
    <div class="cbp-card ${type}" data-component="link-card">
      <img src="assets/images/profile-page/passenge-photo-v2.jpg" alt="portrait of a person" width="116">
      <div class="cbp-card__content">
        <div class="cbp-card__header">
          <h4 class="cbp-card__title"><i class="fas fa-info"></i>${title}</h4>
          <i class="fas fa-arrow-circle-right"></i>
        </div>
        <p class="cbp-text-body cbp-mt-2">Here is an example of some supplementary text for this purely informational card</p>
      </div>
    </div>
  `;
};

const LinkCardWithFlagTemplate = ({ title, danger, ...args }) => {
  return `
    <div class="cbp-card ${danger && 'cbp-card--danger'} cbp-d-block" data-component="link-card">
      <img src="assets/images/profile-page/passenge-photo-v2.jpg" alt="portrait of a person" width="310">
      <div class="cbp-card__header cbp-card__header--flag">
        <h4 class="cbp-card__title"><i class="fas fa-exclamation-triangle"></i>Jimbo Thompson</h4>
      </div>
    </div>
  `;
};

const SmallLinkCardTemplate = ({ title, type }) => {
  return `
    <div class="cbp-card ${type} cbp-card--small" data-component="link-card">
      <div class="cbp-card__content">
        <div class="cbp-card__header">
          <h4 class="cbp-card__title"><i class="fas fa-info"></i>${title}</h4>
          <i class="fas fa-arrow-circle-right"></i>
        </div>
        <p class="cbp-text-body cbp-mt-2">Here is an example of some supplementary text for this purely informational card</p>
      </div>
    </div>
  `;
};

export const LinkCard = LinkCardTemplate.bind({});
LinkCard.args = {
  title: 'General Card'
};
LinkCard.storyName = 'Default'

export const LinkCardMedia = LinkCardMediaTemplate.bind({});
LinkCardMedia.args = {
  title: 'General Card'
};
LinkCardMedia.storyName = 'With Media'

export const LinkCardWithFlag = LinkCardWithFlagTemplate.bind({});
LinkCardWithFlag.args = {
  title: 'General Card'
}
LinkCardWithFlag.storyName = 'With Flag';

export const SmallLinkCard = SmallLinkCardTemplate.bind({});
SmallLinkCard.args = {
  title: 'General Card'
};
SmallLinkCard.storyName = 'Small'