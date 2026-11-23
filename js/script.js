/**
 * Task 1 - Product Showcase Card
 * Handles the "Add to Bag" interaction: updates the bag counter and gives
 * the user short visual feedback on the button.
 */
(function () {
  "use strict";

  var FEEDBACK_DURATION_MS = 1200;

  var addButton = document.getElementById("add-to-bag");
  var bagCount = document.getElementById("bag-count");

  if (!addButton || !bagCount) {
    return; // Markup missing: fail silently instead of throwing errors.
  }

  var itemsInBag = 0;
  var resetTimer = null;

  function showAddedFeedback() {
    addButton.textContent = "Added \u2713";
    window.clearTimeout(resetTimer);
    resetTimer = window.setTimeout(function () {
      addButton.textContent = "Add to Bag";
    }, FEEDBACK_DURATION_MS);
  }

  addButton.addEventListener("click", function () {
    itemsInBag += 1;
    bagCount.textContent = itemsInBag;
    showAddedFeedback();
  });
})();
