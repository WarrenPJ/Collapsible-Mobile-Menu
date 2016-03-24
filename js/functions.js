//Pascal Warren
//2015

$(document).ready(function() { 
            // panelScroll(); line list-items to Left of screen when panel-header clicked
                function panelScroll() {

                    var scrollArea = $('.navbar-sm');
                    var toScroll = $('.panel a');

                    toScroll.each(function() {
                        var clicked = $(this);
                        clicked.on('click', function () {
                            var leftOffset = clicked.offset().left-10 - scrollArea.offset().left-10 + scrollArea.scrollLeft(); // .left-10 for padding
                            scrollArea.animate({ scrollLeft: leftOffset }, 800);
                        });
                    });        
                }
              panelScroll();



            // emailOrPhone(); One input that detects whether email or phone number was entered     
                function emailOrPhone() {
                    var email = document.getElementById('emailphone');
                    var inVal = email.value;
                    var mailFormat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                    var phoneRegex = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;

                    if (mailFormat.test(inVal)) {
                        $('#emph-btn').attr('data-target','#myModal1');
                    }
                    else if (phoneRegex.test(inVal)) {
                        $('#emph-btn').attr('data-target','#myModal2');
                    }
                    else {
                        $('#emph-btn').attr('data-target','#myModal3');
                    }
                    $("#push-btn").click(function(){
                        $("#push-btn").attr("href", "https://public.govdelivery.com/accounts/WAKING/subscriber/new.html?code=WAKING&login=" + inVal);
                    });
                    return $(".jcontent").html(inVal); // var in model box
                }

                $("#emph-btn").click(function(){
                    emailOrPhone();
                });

            }); // (jQuery)