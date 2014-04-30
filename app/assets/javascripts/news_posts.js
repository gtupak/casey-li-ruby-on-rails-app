$(function(){
	$(".news-post .title").click(fetchNewsPostBody);	
});

function fetchNewsPostBody(){

	var news_post_title_element = $(this);
	var news_post_body_element = $(news_post_title_element.siblings(".body")[0]);
	var news_post_id = news_post_title_element.attr("news_post_id");

	/* Add AJAX Loading Spinner */
	news_post_body_element.html("AJAX LOADER");

	/* going to make the ajax call */
	$.ajax({
		url : "/news_posts/" + news_post_id,
		dataType : "JSON",
		success : function(data, textStatus, jqXHR){
			news_post_body_element.html(data.body);
		},
		error : function(jqXHR, textStatus, errorThrown){
			alert("Error");
		}
	});	
}