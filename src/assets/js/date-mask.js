var Stock = Stock || {};


Stock.MaskDate = (function () {

  function MaskDate() {
    this.inputDate = $('.date-mask');
  }

  MaskDate.prototype.enable = function () {
    this.inputDate.mask('00/00/0000');
    this.inputDate.datepicker({
      orientation: 'bottom',
      language: 'pt-BR'
	});
	
  }

  return MaskDate;

}());

$(function () {
  var maskDate = new Stock.MaskDate();
  maskDate.enable();
});
