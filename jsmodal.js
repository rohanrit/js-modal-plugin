(function($){
    'use strict';
    $.fn.formmodal = function(options){
        var defaults = {
            closebtn: "videopopclose",
            container: "videocontainer",
            modal: "videopopmodal",
            modalUrl: $.noop,
            html: $.noop,
        };
        var settings = $.extend(true, {}, defaults, options);
        
        const $item = $(this), $body = $("body");
        var $width =  $item.attr("data-width") != undefined ? $item.attr("data-width") : '1024';
        settings.modalUrl= $item.attr('href'),
        settings.html = '<div id="'+ settings.container +'" style="position: fixed;bottom: 0;left: 0;right: 0;top: 0;background-color: rgba(0, 0, 0, 0.35);z-index: 1000000;">'+
        '<div class="'+ settings.modal +'" style="max-width:'+ $width +'px;background: #fff;width: 90%;height: auto;border: 5px solid #fff;overflow: hidden;display: block;position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);border-radius: 5px;">'+
        '<div class="embed-responsive" style="position: relative;display: block;height: 0;padding: 0;overflow: hidden;width: 100%;padding-bottom: 56.25%;margin:0">'+
        '<iframe width="560" height="315" src="'+ settings.modalUrl +'" frameborder="0" allowfullscreen="">'+
        '</iframe>'+
        '</div><a href="javascript:void(0);" class="'+ settings.closebtn +'" style="position: absolute;right: 0;top: 0;font-size: 25px;color: inherit;background: #fff;padding: 2px 10px;border-radius: 25px;text-align: center;opacity: 0.95;z-index: 100000;text-decoration: none;">&times;</a>'+
        '</div></div>';

        return this.each(function(action ) {
            $item.on("click", function (evt) {
                evt.preventDefault();
                $body.css("overflow","hidden").append(settings.html);
            });

            $body.on("click", "a."+settings.closebtn, function(evt){
                $('#'+settings.container).remove();
                $body.css("overflow","");
                evt.preventDefault();
            });
        });
    }
}(jQuery));
