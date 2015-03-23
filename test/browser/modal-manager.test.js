var _ = require('underscore');

var ModalManagerMixin = require('../../mixins/modal-manager');

function makeFakeComponentWithContext(fakeContext) {
  return _.extend({ context: fakeContext }, ModalManagerMixin);
}

describe('ModalManagerMixin', function() {
  it('should provide showModal() method', function(done) {
    makeFakeComponentWithContext({
      showModal: function(modalClass, modalProps) {
        modalClass.should.eql("class");
        modalProps.should.eql("props");
        done();
      }
    }).showModal("class", "props");
  });

  it('should provide hideModal() method', function(done) {
    makeFakeComponentWithContext({
      hideModal: function() { done(); }
    }).hideModal();
  });
});
