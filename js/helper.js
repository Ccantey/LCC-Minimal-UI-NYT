$( document ).ready(function() {
	//kickoff map logic
    initialize();

    $('.election-navigation-a').on('click', function(e){
    	e.preventDefault();
      //remove previous selections map methods give an example of how one would toggle layers
      document.getElementById('features').innerHTML = "";
      // map.removeLayer("2012results-"+ activeTab.geography);
      // map.removeLayer("2012results-"+ activeTab.geography+"-hover");
      // map.setLayoutProperty(activeTab.geography + '-symbols', 'visibility', 'none');
      // map.setLayoutProperty(activeTab.geography + '-lines', 'visibility', 'none');
    	$('.election-navigation-a').removeClass('active');
      
      //add new selections
    	$(this).addClass('active');
    	activeTab.selection = $(this).data('district');
      activeTab.geography = $(this).data('geography');
      activeTab.name = $(this).data('name');
    	// changeData(activeTab);
    })

 });