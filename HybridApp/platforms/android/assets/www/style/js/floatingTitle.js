(function(){if(commonEssentialData.getAbtestOptionByKey("1133")!=="B")return;var floatingPos=[];var isSettingComplete=false;var $FloatingTitles=$(".floating-title");var STICKED_TITLE_HEIGHT=28;var HEADER_HEIGHT=45;var END_PADDING=100;var panoramaDealHeight;function setFloatingPos(){panoramaDealHeight=$(".plp-panorama_B li").eq(0).outerHeight(true);floatingPos=[];$.each($FloatingTitles,function(idx,val){var $title=$(val);var startPos=$title.offset().top+$title.height()-HEADER_HEIGHT;var endPos=startPos+
$title.closest(".floating-wrapper").next().outerHeight(true)-END_PADDING;floatingPos.push({start:startPos,end:endPos})})}function getListPos(){$FloatingTitles.each(function(idx,val){var deals=$(val).parent().next().find("li");var dealTopPoses=[];var currentTop=floatingPos[idx].start;dealTopPoses.push(currentTop);for(var i=1;i<deals.size();i++){currentTop+=deals.eq(i).outerHeight(true);dealTopPoses.push(currentTop-STICKED_TITLE_HEIGHT)}floatingPos[idx]["dealsPos"]=dealTopPoses})}$window.on("floatingTitle",
function(){if($FloatingTitles.size()===0||isSettingComplete)return;isSettingComplete=true;setTimeout(activeFloatingTitle,500)});function activeFloatingTitle(){var unitPoses;var currentPageNum;setFloatingPos();getListPos();$document.on("scroll",function(){var scrollPos=$(this).scrollTop();var $on;for(var i=0;i<floatingPos.length;i++)if(floatingPos[i].start<scrollPos&&scrollPos<=floatingPos[i].end)$on=$FloatingTitles.eq(i);$(".float").removeClass("float");if(!!$on){$on.addClass("float");unitPoses=floatingPos[$on.parent().index(".floating-wrapper")].dealsPos;
currentPageNum=unitPoses.indexOf(Math.max.apply(Math,unitPoses.filter(function(ele){return ele<scrollPos})))+1;if(currentPageNum!==parseInt($on.find(".current-count").text(),10))$on.find(".current-count").text(currentPageNum)}})}})();