var emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

Client = {
  alert: function(data) {
    Blaze.renderWithData(Template.alert, data, document.body);
  },
  validEmail: function(email){
    return !!email && emailRegex.test(email);
  },
  viewmodelValue: function (vmName, prop) {
    var vm = ViewModel.byId(vmName);
    return vm && vm[prop]();
  }
};
