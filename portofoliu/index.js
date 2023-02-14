// Close nav-menu after click

  function toggle(checked) {
    let elm = document.getElementById('hamburger');
    if (checked != elm.checked) {
      elm.click();
    }
  }