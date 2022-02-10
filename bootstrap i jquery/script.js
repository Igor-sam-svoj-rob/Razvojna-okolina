$(".panel-button").on("click", function () {
  const panelId = $(this).attr("data-panel-class");
  $("." + panelId).toggle();
});
