/* MW Scripts for headlines */

function convertDate(dt) {
  var  monthNames = ["", "January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"],
    dtParts = dt.split("/"),      
    mm = Number(dtParts[0]), 
    dd = dtParts[1].replace(/^0/, ''),
    str = monthNames[mm] + " " + dd +", 20" + dtParts[2];
  return str;
}
function tidyBlurb(str){
  var tidy = str.replace('(OTCQB: FMCC)','').replace(/\s*MCLEAN,\s*VA--/,'').replace(/Marketwired\s*-\s*/,'').replace(/\s*\(.{3}\s+\d\d?, \d{4}\)\s*-?\s*/,'').replace(/@*\s*Freddie\s+Mac/g, ' Freddie Mac').replace(/@/g, '&reg;');
  return tidy;
}

function getReleasePageData() {
  var fallback = '<div class="callout large background-primary release-featured"><h2><a href="http://freddiemac.mwnewsroom.com/?category=Multifamily">Press Release Archive</a></h2><p class="lead">Read the latest news and information about Multifamily.</p><p><a class="button hollow" href="http://freddiemac.mwnewsroom.com/?category=Multifamily">Read More</a></p></div>',
      mwReq = $.getJSON("//freddiemac.mwnewsroom.com/scripts/json/js?max=10&cat=Multifamily", function(data) {
      useReleasePageData(data);      
    }).fail(function( jqxhr, textStatus, error ) {
      $('.recent-headlines-container:first').html(fallback);
      var err = textStatus + ", " + error;
      console.log(err);
    });
}

function getCardData() {
  var mwReq = $.getJSON("//freddiemac.mwnewsroom.com/scripts/json/js?max=4&cat=Multifamily", function(data) {
      useCardData(data);      
    }).fail(function( jqxhr, textStatus, error ) {
      $('.recent-headline-cards:first').remove();
      var err = textStatus + ", " + error;
      console.log(err);
    });
}

function getSidebarData() {
  var mwReq = $.getJSON("//freddiemac.mwnewsroom.com/scripts/json/js?max=4&cat=Multifamily", function(data) {
      useSidebarData(data);      
    }).fail(function( jqxhr, textStatus, error ) {
      $('.recent-headlines-sidebar').closest('section').remove();
      var err = textStatus + ", " + error;
      console.log(err);
    });
}

function getShortList(x, c) {
  var mwReq = $.getJSON("//freddiemac.mwnewsroom.com/scripts/json/js?max="+x+"&cat=Multifamily", function(data) {
      useListData(data, c);      
    }).fail(function( jqxhr, textStatus, error ) {
      var err = textStatus + ", " + error;
      console.log(err);
    });  
}

function useReleasePageData(data) {
  var $html = '', $feature = '', $curr = '', $blurb;
  for (var i = 0,len = data.releases.length; i < len; i++) {
    $curr = data.releases[i];
    $blurb = tidyBlurb($curr.intro); 
    if(i == 0)  {
      $feature = '<div class="callout large background-primary release-featured"><div class="article-date-lg">' + convertDate($curr.date) + '</div><h2><a href="' + $curr.url + '">' + $curr.title + '</a></h2><p class="lead">' + $blurb + '</p><p><a class="button hollow" href="' + $curr.url + '">Read More</a></p></div>';
      $('.recent-headlines-container:first').before($feature);
    }  
    else {
      $html += '<li><div class="article-date-lg">' + convertDate($curr.date) + '</div><h3 class="article-headline"><a href="' + $curr.url + '">' + $curr.title + '</a></h3><p>' + $blurb + ' <a href="' + $curr.url + '">More</a></p></li>';    
    }
  }
  $('.recent-headlines-container:first').html($html);
}

 
function useCardData(data) {
  var $html = '', $feature = '', $curr = '', $blurb;
  for (var i = 0,len = data.releases.length; i < len; i++) {
    $curr = data.releases[i];
    $blurb = tidyBlurb($curr.intro); 
    $html = '<div class="card-divider"><p class="article-date">' + convertDate($curr.date) + '</p><h3 class="card-title"><a href="' + $curr.url + '">' + $curr.title + '</a></h3><p class="card-blurb">'+ $blurb + '</p></div>';
    if($('#headline-card-'+i).length){$('#headline-card-'+i).html($html);}    
  }
  $('.headline-card-container').addClass('card').addClass('gutter-bottom');
  Foundation.reInit($('.recent-headline-cards:first'));
}

function useSidebarData(data) {
  var $html = '', $feature = '', $curr = '';
  for (var i = 0,len = data.releases.length; i < len; i++) {
    $curr = data.releases[i];
    $html += '<li><span class="article-date">' + convertDate($curr.date) + '</span><br><a class="weight-medium" href="' + $curr.url + '">' + $curr.title + '</a></li>';    
  }
  $('.recent-headlines-sidebar:first').html($html);   
}

function useListData(data, container) {
  var $html = '', $curr = '', $blurb;
  for (var i = 0,len = data.releases.length; i < len; i++) {
    $curr = data.releases[i];     
    $blurb = tidyBlurb($curr.intro); 
    $html += '<li><a class="weight-medium" href="' + $curr.url + '">' + $curr.title + '</a><br><div class="article-date-lg weight-light">' + convertDate($curr.date) + '</div></li>';               
  }
  if ($html !== '') {
    $(container).prepend($html);   
  }
}

  
if ($('.recent-headlines-container').length)  {  
  getReleasePageData();
}
if ($('.recent-headlines-sidebar').length)  {  
  getSidebarData();
}
if($('.recent-headline-cards').length){  
  getCardData();
}

if ($('.recent-headline-home').length)  {  
  getShortList(2, '.recent-headline-home');
}
if($('.recent-headline-shortlist').length){  
  getShortList(3, '.recent-headline-shortlist');
}
