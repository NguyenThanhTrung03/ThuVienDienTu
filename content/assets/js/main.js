/*============================Menu Table===================
- 1, init
- 2, scroll
- 3, Menu Aim Master
- 4, Lazy Loading Image
- 5, Message reply
- 6, Password show
- 7, Author Modal
- 8, quality Control
- 9, active Choine
- 10, checkout
- 11, Typical
- 12, checkout cart-mb
- 13, Owl Slider
- 14, Select 2 Filter Partner
- 15, checkout click order
- 16, Home Slider
- 17, Home Slider Mobile
- 18, checkout cart-mbv2
- 19, Checkout Modal
- 20, MegaMenu Modal
- 21, Fix Pagination 
- 23, Sweet Alert
- 24, FixScrollbarOpenCheckoutModa
- 25, FiX Input Control Mobile
- 26, Maintain Scroll Postion Partner
- 27, home dextop parner-author
- 29, active chonbook-MB
- 31,cate-filter-mb
- 32, tab wrapper
*/
/* ============================= 1, init  ============================= */
var UrlCdn = '';
$(document).ready(function () {
    scroll.init();
    menuComponent.init();
    lazy_load.init();
    reply_comment.init();
    password_show.init();
    modalAuthor.init();
    qualityControl.init();
    optionsDetail.init();
    typicalSilder.init();
    owl.init();
    homeSilder.init();
    homeSilderMobile.init();
    checkoutModal.init();
    megaMenuOverlay.init();
    readMorePayment.init();
    sweetAlert.init();
    fixScrollBarCheckout.init();
    fixInputControlMobile.init();
    collectionSlider.init();
    partnerAuthor.init();
    nxb_plyr.init();
    viewmore.init();
    subMenuChild.init();
    videoViewerPage.init();
    list_video.init();
    cate_filter.init();
    tabWrapper.init();
    topicMobile.init();
    modalOrderDetail.init();
    borderColor.init();
    categoryPanel.init();
    pdf.init();
    copyText.init();
    seeMoreSection.init();
    chooseBookType.init();
    nxbInfoModal.init();
    select_menu_mobile.init();
    var length = cookie.get('cart');
    if (length != null) {
        $('.cart-number').html(length);
    } else {
        $('.cart-number').html(0);
    }
});
/* ============================= 2, Scroll ============================= */
const scroll = {
    init: function () {
        this.goToTop();
    },
    goToTop: function () {
        var btn = $('.scroll__to-top');
        $(window).scroll(function () {
            if ($(window).scrollTop() > 80) {
                btn.show();
            } else {
                btn.hide();
            }
        });
        btn.on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, '300');
        });
    },
}
/* ============================= 3, Menu Aim Master  ============================= */
const menuComponent = {
    init: function () {
        this.setupMenu()
        this.toggleCategory()
        this.mainMenuMobile()
        this.subMenuMobile()
        //this.subMenuMobileLv2()
    },
    setupMenu: function () {
        var $menu = $(".dropdown-menu");
        $menu.menuAim({
            activate: activateSubmenu,
            deactivate: deactivateSubmenu
        });
        function activateSubmenu(row) {
            var $row = $(row),
                submenuId = $row.data("submenuId"),
                $submenu = $("#" + submenuId),
                height = $menu.outerHeight(),
                width = $menu.outerWidth();
            $submenu.css({
                display: "block",
                top: -1,
                left: width - 3,
                height: height - 4
            });
            $row.find("a").addClass("maintainHover");
        }
        function deactivateSubmenu(row) {
            var $row = $(row),
                submenuId = $row.data("submenuId"),
                $submenu = $("#" + submenuId);
            $submenu.css("display", "none");
            $row.find("a").removeClass("maintainHover");
        }
        $(".dropdown-menu li").click(function (e) {
            e.stopPropagation();
        });
        $('.menu__category .dropdown-menu').mouseleave(function () {
            $(".popover").css("display", "none");
            $("a.maintainHover").removeClass("maintainHover");
        })
        $(document).click(function () {
            $(".popover").css("display", "none");
            $("a.maintainHover").removeClass("maintainHover");
        });
    },
    toggleCategory: function () {
        const categoryBtn = $('.menu__category');
        if (categoryBtn.hasClass('menu__index')) {
            categoryBtn.addClass('active');
        }
        else {
            categoryBtn.hover(() => {
                categoryBtn.toggleClass('active');
            })
        }
    },
    mainMenuMobile: function () {
        const body = document.querySelector('body')
        const menuBtn = document.querySelector('.header__button.menu')
        const menuWrap = document.querySelector('.menu__list-mobile')
        const menuOverlay = document.querySelector('.menu__list__overlay')
        if (menuBtn && menuOverlay) {
            menuBtn.addEventListener('click', () => {
                menuWrap.classList.add('active')
                body.classList.add('modal-open')
            })
            menuOverlay.addEventListener('click', () => {
                menuWrap.classList.remove('active')
                body.classList.remove('modal-open')
            })
        }
    },
    subMenuMobile: function () {
        const categoryLink = $(".menu__list-mobile .category__arrow")
        categoryLink.bind("click", function (e) {
            const parent = $(this).closest('li');
            const isExistSubmenu = parent.find(".popover__submenu")
            parent.toggleClass('active');
            isExistSubmenu.slideToggle("fast");
            var parentSubmenu = $(this).closest('.submenu');
            var submenuItem = parentSubmenu.find(".submenu__item")
            submenuItem.slideToggle("fast");
        })
    }
}
/* ============================= 4, Lazy Loading Image ============================= */
const lazy_load = {
    init: function () {
        this.lazy_loading();
    },
    lazy_loading: function () {
        const myLazyLoad = new LazyLoad({
            elements_selector: ".lazy",
            threshold: -100,
            effect: "fadeIn"
        });
        myLazyLoad.update();
    }
}
/* ============================= 5, Message reply ============================= */
const reply_comment = {
    init: function () {
        this.reply_comment();
    },
    reply_comment: function () {
        const click_reply = document.querySelectorAll(".comment-box .content__reply-name");
        const show_reply = document.querySelector(".comment-box .comment__reply");
        if (click_reply && show_reply) {
            click_reply.forEach((item, index) => item.addEventListener("click", () => {
                show_reply.classList.toggle("active");
            }))
        }
    }
}
/* ============================= 6, Password show ============================= */
const password_show = {
    init: function () {
        this.show();
    },
    show: function () {
        $(".icon__small").bind("click", function () {
            let input = $(this).parent().find("input.nxb__pw");
            if (input.attr('type') === "password") {
                input.attr('type', 'text');
            } else {
                input.attr('type', 'password');
            }
        })
    }
}
/* ============================= 7, Author Modal ============================= */
const modalAuthor = {
    init: function () {
        this.showModal();
    },
    showModal: function () {
        const btnShow = $('.author-list__more-list');
        const modalOverlay = $('.list__overlay');
        const listContent = $('.list__content');
        const btnClose = $('.list__content-btn');
        btnShow.click(function () {
            modalOverlay.addClass('list__overlay--show');
            listContent.addClass('list__content--show');
        })
        btnClose.add(modalOverlay).on('click', function (e) {
            modalOverlay.removeClass('list__overlay--show');
            listContent.removeClass('list__content--show');
            e.stopPropagation();
        });
    }
}
/* ============================= 8, quality Control ============================= */
const qualityControl = {
    init: function () {
        this.setupQuanlity('.detail-increase', '.detail-decrease', '.js-product-qty')
    },
    setupQuanlity: function (increase, decrease, quality) {
        var minVal = 1,
            maxVal = 10000;
        $(increase).on('click', function () {
            var $parentElm = $(this).parents(".num-in");
            var value = $parentElm.find(quality).val();
            if (value < maxVal) {
                value++;
            }
            $parentElm.find(quality).val(value);
            checkout.select_book();
        });
        // Decrease product quantity on cart page
        $(decrease).on('click', function () {
            var $parentElm = $(this).parents(".num-in");
            var value = $parentElm.find(quality).val();
            if (value > 1) {
                value--;
            }
            $parentElm.find(quality).val(value);
            checkout.select_book();
        });
        $(quality).on('change', function () {
            var value = $(this).val();
            if (value < 1 || value === '') {
                $(this).val(1);
                value = "1";
            }
            checkout.select_book();
        });
    },
}
/* ============================= 9, active Choine  ============================= */
const optionsDetail = {
    init: function () {
        this.setupDetail('.category-li', '.item-book', '.item-ebook', '.item-paper');
    },
    setupDetail: function (main, options, ebook, paper) {
        const wrap = document.querySelector(main);
        if (wrap) {
            const optionsBtn = wrap.querySelectorAll(options);
            optionsBtn.forEach((item, index) =>
                item.addEventListener("click", () => {
                    if (item.parentNode.className.includes('sach-giay')) {
                        if ($(paper).hasClass('active')) {
                            $('#buy-paper').prop('checked', false);
                        } else {
                            $('#buy-paper').prop('checked', true);
                        }
                        item.parentNode.classList.toggle('active')
                        const sachGiayOptions = document.querySelector('.sach-giay__options__wrapper')
                        if (sachGiayOptions) sachGiayOptions.classList.toggle('active')
                    }
                    if (item.parentNode.className.includes('ebook')) {
                        if ($(ebook).hasClass('active')) {
                            $('#buy-ebook').prop('checked', false);
                        } else {
                            $('#buy-ebook').prop('checked', true);
                        }
                        item.parentNode.classList.toggle('active')
                    }
                    item.classList.toggle("active");
                    checkout.select_book();
                })
            );
        }
        $(".sach-giay-btn").click(function () {
            $('.sach-giay__options__wrapper').addClass("active");
            $('.sach-giay').addClass("active");
            $('.sach-giay .category-li__item').addClass("active");
            $('#buy-paper').prop('checked', true);
        })
    }
}
/* ============================= 10, checkout ============================= */
const checkout = {
    step: 1,
    text: '',
    IsLogin: '0',
    IsVoucher: false,
    TypeVoucher: 0,
    ArrayCart: [],
    ArrayPromotion: [],
    init: function () {
        this.tabPayment();
        this.order();
    },
    loading: function (container, action) {
        if (action === 'show') {
            $(':button').prop('disabled', true);
            App.blockUI({ target: container, boxed: true, message: 'Loading', iconOnly: false });
        } else {
            $(':button').prop('disabled', false);
            App.unblockUI(container);
        }
    },
    noti: function (type, message, time, url = '') {
        if (time === undefined)
            time = 1500;
        if (type == "success") {
            $('#toast-success .toast-text').html(message);
            $('#toast-success').removeClass('d-none');
            var myVar = setInterval(function () {
                $('#toast-success').addClass('d-none');
                if (url !== '')
                    window.location.href = url;
                clearTimeout(myVar);
            }, time);
        } else if (type == "error") {
            $('#toast-error .toast-text').html(message);
            $('#toast-error').removeClass('d-none');
            var myVar = setInterval(function () { $('#toast-error').addClass('d-none'); clearTimeout(myVar); }, time);
        }
        else if (type == "info") {
            $('#toast-info .toast-text').html(message);
            $('#toast-info').removeClass('d-none');
            var myVar = setInterval(function () { $('#toast-info').addClass('d-none'); clearTimeout(myVar); }, time);
        }
    },
    cart_quality: function (elm, n, bid) {
        var value = parseInt($(elm).closest('.cart-item').find('.in-num').val());
        if (value === '' || value === null || value == undefined) {
            $(this).val(1);
            value = 1;
        }
        var cartItem = {
            BookId: bid,
            ComboId: 1,
            Quantity: value,
            BookType: 1
        }        
        if (n !== 0) {
            cartItem.Quantity = value + n;            
        }       
        if (cartItem.Quantity < 1) {
            cartItem.Quantity = 1;
            $(elm).closest('.cart-item').find('.decrease-button').prop('disabled', true);
        } else {
            $(elm).closest('.cart-item').find('.decrease-button').prop('disabled', false);
        }            
        checkout.update_cart(elm, cartItem);
        $(elm).closest('.cart-item').find('.in-num').val(cartItem.Quantity)
    },
    tabPayment: function () {
        $('.payment-group .paymentMethod .method').click(function () {
            $('.payment-group .paymentMethod .method').removeClass('active');
            $(this).addClass('active');
            checkout.text = $(this).find('h4').html();
        })
    },
    click_dropdow: function (elm) {
        $(elm).find(".dropdow").toggleClass('active');
    },
    click_dropdow_li: function (elm, t) {
        var s = '.' + t;
        let getPackageName = $(elm).find('.get-package-name').text();
        let getPackagePrice = parseFloat($(elm).find('.get-package-price').attr('value'));
        let getPackageId = parseInt($(elm).find('.get-package-id').attr('value'));
        $(elm).parent().parent().find(s + '-package-id').attr("value", getPackageId);
        $(elm).parent().parent().find(s + '-package-price').attr("value", getPackagePrice);
        $(elm).parent().parent().find('.time-text').html(getPackageName);
        if ($(elm).parent().parent().find('.adress')) {
            $(elm).parent().parent().find('.adress').addClass('active');
        }
        $(s + '-price-value').val(getPackagePrice)
        $(s + '-item-price').html(getPackagePrice.format(0, 3, '.', ',') + '₫')
        checkout.select_book();
    },
    add_cart: function (type, bid) {
        if (checkout.IsLogin === '1') {
            var carts = [];
            var isCheck = false;
            if ($('#buy-paper').is(':checked')) {
                isCheck = true;
                var cartItem = {
                    Checked: true,
                    BookId: bid,
                    Quantity: parseInt($('.js-product-qty').val()),
                    BookType: 1,
                    Weight: parseFloat($('.paper-weight-value').val())
                }
                carts.push(cartItem);
            }
            if ($('#buy-ebook').is(':checked')) {
                isCheck = true;
                var cartItem = {
                    Checked: true,
                    BookId: bid,
                    Quantity: 1,
                    BookType: 2,
                    PagkageId: parseInt($('.ebook-package-id').val()),
                }
                carts.push(cartItem);
            }
            if ($('#buy-audio').is(':checked')) {
                isCheck = true;
                var cartItem = {
                    Checked: true,
                    BookId: bid,
                    Quantity: 1,
                    BookType: 4,
                    PagkageId: parseInt($('.audio-package-id').val()),
                }
                carts.push(cartItem);
            }
            if ($('#buy-multimedia').is(':checked')) {
                isCheck = true;
                var cartItem = {
                    Checked: true,
                    BookId: bid,
                    Quantity: 1,
                    BookType: 16,
                    PagkageId: parseInt($('.multimedia-package-id').val()),
                }
                carts.push(cartItem);
            }
            if (isCheck == true) {
                checkout.set_cart(carts);
                checkout.noti("success", "Sản phẩm đã được thêm vào giỏ hàng");
                if (type == 1)
                    window.location.href = '/checkout/cart';
            }
            else {
                checkout.noti("info", "Bạn chưa chọn sản phẩm nào");
            }
        } else {
            window.location.href = '/customer/login?redirect=' + window.location.pathname;
        }
    },
    checkAll: function (elm) {
        $.post("/checkout/checkall", { isCheckAll: $(elm).is(":checked") })
        $('input:checkbox').not(elm).prop('checked', $(elm).is(":checked"));
        checkout.calculate_money(true);
    },
    checkOne: function (elm, bid, e) {
        $.post("/checkout/checkone", { bid: bid, e: e, c: $(elm).is(":checked") }, function (data) {
            $("#check_all").prop('checked', data);
            checkout.calculate_money(true);
        })
    },
    remove_cart: function (elm, bid, e) {
        $.post("/checkout/removecart", { bid: bid, e: e }, function () {
            $(elm).closest('.border-top').remove();
            checkout.calculate_money();
        })
    },
    set_cart: function (carts) {
        $.ajax({
            type: "POST",
            url: "/checkout/addcart",
            data: JSON.stringify(carts),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function () {
                var length = cookie.get('cart');
                $('.cart-number').html(length);
            }
        });
    },
    update_cart: function (elm, cartItem) {
        $.ajax({
            type: "POST",
            url: "/checkout/updatecart",
            data: JSON.stringify(cartItem),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (item) {
                if (cartItem.BookType === 1) {
                    let book_cost_value = parseFloat($(elm).closest('.cart-item').find('.book-cost-value').val());
                    let book_price_value = parseFloat($(elm).closest('.cart-item').find('.book-price-value').val());
                    var book_discount_value = book_cost_value - book_price_value;
                    var total_cost_value = item.Quantity * book_cost_value;
                    var total_discount_value = item.Quantity * book_discount_value;
                    var total_price_value = total_cost_value - total_discount_value;                    
                    $(elm).closest('.cart-item').find('.total-price-show').html(total_price_value.format(0, 3, '.', ','));
                    $(elm).closest('.cart-item').find('.total-cost-value').val(total_cost_value);
                    $(elm).closest('.cart-item').find('.total-discount-value').val(total_discount_value);
                }
                checkout.calculate_money(true);
            }
        });
    },
    invoice: function () {
        if ($('#IsExportInvoice').is(':checked')) {
            $('.infocompany').removeClass('d-none');
        } else {
            $('.infocompany').addClass('d-none');
        }
    },
    address_dropdown: function () {
        $('.js-city-select2 .dropdown-display').remove();
        $('.js-city-select2 .dropdown-clear-all').remove();
        $('.js-city-select2 .dropdown-main').remove();
        $('.js-district-select2 .dropdown-display').remove();
        $('.js-district-select2 .dropdown-clear-all').remove();
        $('.js-district-select2 .dropdown-main').remove();
        $('.js-ward-select2 .dropdown-display').remove();
        $('.js-ward-select2 .dropdown-clear-all').remove();
        $('.js-ward-select2 .dropdown-main').remove();
        var addressId = $(".js-address-id").val();
        if (addressId !== null && addressId !== '') {
            var cityId = $('option:selected', ".js-address-id").attr('data-cityId');
            var districtId = $('option:selected', ".js-address-id").attr('data-districtId');
            var wardId = $('option:selected', ".js-address-id").attr('data-wardId');
            var text = $('option:selected', ".js-address-id").text();

            $('select[name="CityId"]').val(cityId);
            checkout.city_dropdown();
            $('input[name="Address"]').val(text);

            $.post('/checkout/district', { cityId: cityId }, function (data) {
                $('.js-district-id').html(data);
                $('select[name="DistrictId"]').val(districtId);
                checkout.district_dropdown();
            })
            $.post('/checkout/ward', { districtId: districtId }, function (data) {
                $('.js-ward-id').html(data);
                $('select[name="WardId"]').val(wardId);
                checkout.ward_dropdown();
            })
            var totalCost = parseFloat($("#totalCost").val());
            var discountbook = parseFloat($("#discountbook").val());
            var discountorder = parseFloat($(".bill-discount-order").val());
            var feeship = parseFloat($('option:selected', ".js-address-id").attr('data-feeship'));
            var percentShipping = parseFloat($("#percentShipping").val());
            var discountShipping = (feeship * percentShipping) / 100;
            var TotalPayment = totalCost - discountbook - discountorder + feeship - discountShipping;
            $('#feeship').val(feeship);
            if (feeship == 0) {
                $('#customer_payfee_custom').hide();
            } else {
                $('#customer_payfee_custom').show();
            }
            $('.money').html(TotalPayment.format(0, 3, '.', ',') + '₫')
            $('.feeship').html(feeship.format(0, 3, '.', ',') + '₫')
            if (discountShipping > 0) {
                $('.discountShipping').html('-' + discountShipping.format(0, 3, '.', ',') + '₫');
                $('.discount-shipping').removeClass('d-none')
            } else {
                $('.discount-shipping').addClass('d-none')
            }
        } else {
            $('select[name="CityId"]').val('');
            $('.js-district-id').html('');
            $('.js-ward-id').html('');
            $('textarea[name="Address"]').val('');
            checkout.city_dropdown();
            checkout.district_dropdown();
            checkout.ward_dropdown();
        }
    },
    city_dropdown: function () {
        $('.js-city-select2').dropdown({
            searchable: true,
            readOnly: false,
            input: '<input type="text" placeholder="Nhập tỉnh, thành để tìm nhanh">',
            choice: function () {
                var cityId = $(".js-city-id").val();
                $('.js-address-id').val('')
                $.post('/checkout/district', { cityId: cityId }, function (data) {
                    $('.js-district-select2 .dropdown-display').remove();
                    $('.js-district-select2 .dropdown-clear-all').remove();
                    $('.js-district-select2 .dropdown-main').remove();
                    $('.js-ward-select2 .dropdown-display').remove();
                    $('.js-ward-select2 .dropdown-clear-all').remove();
                    $('.js-ward-select2 .dropdown-main').remove();
                    $('.js-district-id').html(data);
                    $('.js-ward-id').html('');
                    checkout.district_dropdown();
                    checkout.ward_dropdown();
                })
            }
        });
    },
    district_dropdown: function () {
        $('.js-district-select2').dropdown({
            searchable: true,
            readOnly: false,
            input: '<input type="text" placeholder="Nhập quận, huyện để tìm nhanh">',
            choice: function (data) {
                $('.js-district-select2 .dropdown-selected').html(data.currentTarget.textContent);
                var districtId = $(".js-district-id").val();
                $('.js-address-id').val('')
                $.post('/checkout/ward', { districtId: districtId }, function (data) {
                    $('.js-ward-select2 .dropdown-display').remove();
                    $('.js-ward-select2 .dropdown-clear-all').remove();
                    $('.js-ward-select2 .dropdown-main').remove();
                    $('.js-ward-id').html(data);
                    checkout.ward_dropdown();
                })
            }
        });
    },
    ward_dropdown: function (isVoucher) {
        $('.js-ward-select2').dropdown({
            searchable: true,
            readOnly: false,
            input: '<input type="text" placeholder="Nhập phường, xã để tìm nhanh">',
            choice: function (data) {
                $('.js-address-id').val('');
                $('.js-ward-select2 .dropdown-selected').html(data.currentTarget.textContent);
                checkout.change_feeship(isVoucher);
            }
        });
    },
    order: function () {
        $('.btn-step').click(function () {
            $('.checkout_headding-icon').show();
            $('.js-step').hide();
            $('.group_item .icon-item').removeClass('active');
            checkout.step++;
            $('.js-icon-' + checkout.step).addClass('active');
            $('.js-step-' + checkout.step).show();
            $(window).scrollTop(0);
        })
        $('.checkout_headding-icon').click(function () {
            $('.js-step').hide();
            $('.group_item .icon-item').removeClass('active');
            checkout.step--;
            $('.js-icon-' + checkout.step).addClass('active');
            $('.js-step-' + checkout.step).show();
            if (checkout.step == 1) {
                $('.checkout_headding-icon').hide();
            }
            $(window).scrollTop(0);
        })
    },
    voucher: function () {
        checkout.loading(".section-checkout", "show")
        var code = $('#voucher-code').val();
        if (code !== '' && code !== undefined && code !== null) {
            var total_price = parseFloat($('.bill-total-price').val());//Tổng giá trị sản phẩm
            var total_feeship = parseFloat($('.bill-total-feeship').val());// Tổng phí ship
            var discount_order = parseFloat($('.bill-discount-order').val());// Tổng giảm giá theo giá trị đơn hàng
            var total_payment = total_price - discount_order;// Giá phải thanh toán sau khi giảm giá trên đơn hàng
            //Xử lý mã voucher khi áp dụng
            $.post("/checkout/voucher", { code: code, total_price: total_price, total_payment: total_payment, total_feeship: total_feeship }, function (data) {
                checkout.TypeVoucher = data.Type;
                if (data.Type === 0) {
                    //Trường hợp mã giảm giá không tồn tại
                    //1.Hủy tất các các voucher áp dụng trước đó (nếu có)
                    $('.gift-code').html('');
                    $('.cart-gift-code-item').html('');
                    $('.total-discount-voucher').val(0);
                    $('.codeboxinput-apply').html('Mã giảm giá không đúng, vui lòng kiểm tra lại.');
                    $('.codeboxinput-apply').addClass('error');
                    $('.codeboxinput-apply').removeClass('success');
                    $('#voucher-code').prop('readonly', false);
                    $('#voucher-code').prop('disabled', false);
                    //2. Chạy lại hàm tính giá sau khi bỏ voucher
                    checkout.calculate_money(false);
                    checkout.IsVoucher = false;
                }
                else if (data.Type === 1) {
                    //CTKM giảm giá sách
                    //1. bỏ các CTKM voucher khác
                    $('.gift-code').html('');
                    $('.cart-gift-code-item').html('');
                    //2. Tính toán giá giảm khi app dụng voucher khi áp dụng nếu tồn tại sản phẩm đủ điều kiện
                    var len = data.PromotionBooks.length;
                    data.PromotionBooks.forEach((item, index) => {
                        var key = '.cart-item-' + item.QueryId;
                        let book_price_value = parseFloat($(key).find('.book-price-value').val());
                        let quantity = parseInt($(key).find('.in-num').val());
                        var book_discount_voucher = (book_price_value * item.Percent) / 100;
                        var total_discount_voucher = book_discount_voucher * quantity;
                        $(key).find('.total-discount-voucher').val(total_discount_voucher);
                        if (index === (len - 1)) {
                            checkout.IsVoucher = true;
                            checkout.calculate_money();
                            $('.codeboxinput-apply').html('Đã áp dụng mã giảm giá.');
                            $('.codeboxinput-apply').removeClass('error');
                            $('.codeboxinput-apply').addClass('success');
                            $('.codeboxinput .btn-success').addClass('d-none');
                            $('.codeboxinput .btn-danger').removeClass('d-none');
                            $('#voucher-code').prop('readonly', true);
                        }
                    })
                }
                else if (data.Type === 4) {
                    //CTKM giảm giá trên gổn giá trị đơn
                    //1. bỏ các CTKM voucher khác
                    $('.gift-code').html('');
                    $('.cart-gift-code-item').html('');
                    $('.total-discount-voucher').val(0);
                    //Hiển thị giá khuyến mại trên tống giá trị đơn đã tính
                    //Tính lại giá thanh toán cuối cùng
                    $('.bill-discount-order').val(data.DiscountOrder);
                    $('.js-cart-discount-order').html('-' + data.DiscountOrder.format(0, 3, '.', ','));
                    var total_feeship = parseFloat($('.bill-total-feeship').val());
                    var discount_feeship = parseFloat($('.bill-discount-feeship').val());
                    var TotalPayment = data.TotalPayment + total_feeship - discount_feeship;
                    $('.js-cart-payment').html(TotalPayment.format(0, 3, '.', ','));

                    //2.Kiểm tra có đủ điều kiện áp dụng ctkm tặng sản phẩm trên tổng đơn không
                    if (data.HtmlGift !== undefined) {
                        $('.cart-gift-item').html(data.HtmlGift);
                        $('.cart-gift').html(data.TotalGift);
                    } else {
                        $('.cart-gift-item').html('');
                        $('.cart-gift').html('0');
                    }
                    checkout.IsVoucher = true;
                    $('.codeboxinput-apply').html('Đã áp dụng mã giảm giá.');
                    $('.codeboxinput-apply').removeClass('error');
                    $('.codeboxinput-apply').addClass('success');
                    $('.codeboxinput .btn-success').addClass('d-none');
                    $('.codeboxinput .btn-danger').removeClass('d-none');
                    $('#voucher-code').prop('readonly', true);
                }
                else if (data.Type === 32) {
                    //CTKM khuyến mại phí vận chuyển
                    //1. bỏ các CTKM voucher khác
                    $('.gift-code').html('');
                    $('.cart-gift-code-item').html('');
                    $('.total-discount-voucher').val(0);
                    //2.Gán lại phí ship và khuyến mại phí ship
                    $('.bill-discount-feeship').val(data.DiscountShipping);
                    $('.discountShipping').html('-' + data.DiscountShipping.format(0, 3, '.', ','));
                    $('.js-cart-payment').html(data.TotalPayment.format(0, 3, '.', ','));
                    $('.codeboxinput-apply').html('Đã áp dụng mã giảm giá.');
                    $('.codeboxinput-apply').removeClass('error');
                    $('.codeboxinput-apply').addClass('success');
                    $('.codeboxinput .btn-success').addClass('d-none');
                    $('.codeboxinput .btn-danger').removeClass('d-none');
                    $('#voucher-code').prop('readonly', true);
                    $('.discount-shipping').removeClass('d-none');
                    checkout.IsVoucher = true;
                    //3.Tính lại giá khi đã có áp dụng voucher khuyến mại phí vận chuyển
                    checkout.calculate_money();
                }
                else if (data.Type === 64) {
                    //CTKM tặng kèm SP khi mua sách
                    //1. bỏ các CTKM voucher khác
                    $('.cart-gift-code-item').html('');
                    $('.total-discount-voucher').val(0);
                    //2. Xử lý hiển thị các sản phẩm tặng kèm trong đơn hàng nếu đủ điều kiện
                    data.ListPaperId.forEach((i, id) => {
                        var key = '.gift-code-' + i;
                        var len = data.PromotionBonusBooks.length;
                        var giftHtmls = '';
                        data.PromotionBonusBooks.forEach((item, index) => {
                            if (item.QueryId === i) {
                                var giftHtml = '<a href="[url]" onclick="tracking([id])"> <i class="fas fa-gift mr-2"></i>Tặng kèm: [name][type][unit]</a>'
                                var url = '/' + item.NameAscii + '-' + item.GiveQueryId + '.html';
                                giftHtml = giftHtml.replace('[url]', url);
                                giftHtml = giftHtml.replace('[id]', item.GiveQueryId);
                                giftHtml = giftHtml.replace('[name]', item.BookName);
                                if (item.BookType == 2) {
                                    giftHtml = giftHtml.replace('[type]', ' - Ebook -');
                                    giftHtml = giftHtml.replace('[unit]', item.Unit);
                                } else if (item.BookType == 4) {
                                    giftHtml = giftHtml.replace('[type]', ' - Audio -');
                                    giftHtml = giftHtml.replace('[unit]', item.Unit);
                                } else if (item.BookType == 1) {
                                    giftHtml = giftHtml.replace('[type]', ' - Sách giấy');
                                    giftHtml = giftHtml.replace('[unit]', '');
                                }
                                giftHtmls += giftHtml
                            }
                            if (index === (len - 1)) {
                                $(key).html(giftHtmls);
                            }
                        });
                    });
                    checkout.IsVoucher = true;
                    $('.codeboxinput-apply').html('Đã áp dụng mã giảm giá.');
                    $('.codeboxinput-apply').removeClass('error');
                    $('.codeboxinput-apply').addClass('success');
                    $('.codeboxinput .btn-success').addClass('d-none');
                    $('.codeboxinput .btn-danger').removeClass('d-none');
                    $('#voucher-code').prop('readonly', true);
                }
                else if (data.Type === 128) {
                    //CTKM tặng kèm SP khi đạt giá trị tổng đơn
                    //1. bỏ các CTKM voucher khác
                    $('.gift-code').html('');
                    $('.total-discount-voucher').val(0);
                    //2.Hiển thị các sản phẩm tặng kèm
                    $('.cart-gift-code-item').html(data.HtmlGift);
                    $('.cart-gift').html(data.TotalGift);
                    checkout.IsVoucher = true;
                    $('.codeboxinput-apply').html('Đã áp dụng mã giảm giá.');
                    $('.codeboxinput-apply').removeClass('error');
                    $('.codeboxinput-apply').addClass('success');
                    $('.codeboxinput .btn-success').addClass('d-none');
                    $('.codeboxinput .btn-danger').removeClass('d-none');
                    $('#voucher-code').prop('readonly', true);
                }
                else if (data.Type === -1) {
                    //TH không đủ điều kiện để áp dụng voucher
                    $('.gift-code').html('');
                    $('.cart-gift-code-item').html('');
                    $('.total-discount-voucher').val(0);
                    $('.codeboxinput-apply').html('Chưa đủ điều kiện áp dụng mã giảm giá.');
                    $('.codeboxinput-apply').addClass('error');
                    $('.codeboxinput-apply').removeClass('success');
                    $('.codeboxinput .btn-success').removeClass('d-none');
                    $('.codeboxinput .btn-danger').addClass('d-none');
                    $('#voucher-code').prop('readonly', false);
                    checkout.calculate_money(false);
                }
                else if (data.Type === -2) {
                    //TH mã giảm giá đã được sử dụng
                    $('.gift-code').html('');
                    $('.cart-gift-code-item').html('');
                    $('.total-discount-voucher').val(0);
                    $('.codeboxinput-apply').html('Mã giảm giá đã được sử dụng.');
                    $('.codeboxinput-apply').addClass('error');
                    $('.codeboxinput-apply').removeClass('success');
                    $('.codeboxinput .btn-success').removeClass('d-none');
                    $('.codeboxinput .btn-danger').addClass('d-none');
                    $('#voucher-code').prop('readonly', false);
                    checkout.calculate_money(false);
                    checkout.IsVoucher = false;
                }
                checkout.loading(".section-checkout", "hide");
            }).fail(function (response) {
                checkout.loading(".section-checkout", "hide");
            });
        } else {
            $('.gift-code').html('');
            $('.cart-gift-code-item').html('');
            $('.total-discount-voucher').val(0);
            cookie.delete('voucher');
            checkout.loading(".section-checkout", "hide");
            $('.codeboxinput-apply').html('');
            $('.codeboxinput-apply').removeClass('error');
            $('.codeboxinput-apply').removeClass('success');
        }
    },
    rsvoucher: function () {
        $('#voucher-code').val('');
        cookie.delete('voucher');
        $('.gift-code').html('');
        $('.cart-gift-code-item').html('');
        $('.total-discount-voucher').val(0);
        $('.codeboxinput-apply').html('');
        $('.codeboxinput-apply').removeClass('error');
        $('.codeboxinput-apply').removeClass('success');
        $('#voucher-code').prop('readonly', false);
        $('.codeboxinput .btn-success').removeClass('d-none');
        $('.codeboxinput .btn-danger').addClass('d-none');
        if (checkout.IsVoucher == true) {
            if (checkout.TypeVoucher == 32) {
                checkout.change_feeship(false);
            } else {
                checkout.calculate_money();
                checkout.IsVoucher = false;
            }
            checkout.TypeVoucher = 0;
        }
    },
    order_confirm: function () {
        checkout.loading('.section-checkout__content', 'show');
        $.post('/checkout/create', $("#save-order").serialize(), function (data) {
            if (data.Error == true) {
                $('.js-order-alert').html(data.Message);
                $('.js-order-alert').show();
                $('.js-success-alert').hide();
                $('.checkout_headding-icon').show();
                $('.js-step').hide();
                $('.group_item .icon-item').removeClass('active');
                checkout.step = data.Type;
                $('.js-icon-' + checkout.step).addClass('active');
                $('.js-step-' + checkout.step).show();
                if (checkout.step == 1) {
                    $('.checkout_headding-icon').hide();
                }
                checkout.noti('error', data.Message);
                $(window).scrollTop(0);
                checkout.loading('.section-checkout__content', 'hide');

                $('.alert-modal-content').removeClass('active');
                $('html').css({ "overflow": "unset" });
            } else {
                window.location.href = data.Url;
            }
        }).fail(function () {
            checkout.noti('error', "Mua hàng không thành công.");
            checkout.loading('.section-checkout__content', 'hide');
        });
    },
    tranfer_confirm: function (code) {
        $.post('/checkout/tranfer-update', { 'code': code }, function (data) {
            if (data.Error == true) {
                checkout.noti('error', data.Message);
            } else {
                checkout.noti('success', data.Message, 1500, '/');
            }
        });
    },
    change_feeship: function (isVoucher) {
        var cityId = $('.js-city-id').val();
        var districtId = $('.js-district-id').val();
        var wardId = $('.js-ward-id').val();
        var addressId = $('.js-address-id').val();
        var methodId = $("input[name=PaymentMethodId]").val();
        var weight = $('.bill-total-weight').val();
        var TotalPrice = parseFloat($('.bill-total-price').val());
        var TotalPricePaper = parseFloat($('.bill-total-pricepaper').val());
        var DiscountOrder = parseFloat($(".bill-discount-order").val());
        var TotalPayment = TotalPrice - DiscountOrder;
        $(':button').prop('disabled', true);
        $.post("/checkout/transportfee", { 'addressId': addressId, 'cityId': cityId, 'districtId': districtId, 'wardId': wardId, 'total_price_paper': TotalPricePaper, 'total_payment': TotalPayment, 'methodId': methodId, 'weight': weight, isVoucher: isVoucher }, function (data) {
            TotalPayment = TotalPayment + data.Fee - data.DiscountShipping;
            if (data.Fee == 0) {
                $('#customer_payfee_custom').hide();
            } else {
                $('#customer_payfee_custom').show();
            }
            $('.bill-total-feeship').val(data.Fee)
            $('.bill-discount-feeship').val(data.DiscountShipping)
            $('.js-cart-payment').html(TotalPayment.format(0, 3, '.', ','))
            $('.feeship').html(data.Fee.format(0, 3, '.', ','))
            if (data.DiscountShipping > 0) {
                $('.discountShipping').html('-' + data.DiscountShipping.format(0, 3, '.', ','));
                $('.discount-shipping').removeClass('d-none')
            } else {
                $('.discountShipping').html(0);
                $('.discount-shipping').addClass('d-none')
            }
            $(':button').prop('disabled', false);
        });
    },
    select_book: function () {
        var ebookPrice = 0;
        var paperPrice = 0;
        var audioPrice = 0;
        var multimediaPrice = 0;
        if ($('#buy-paper').is(':checked')) {
            paperPrice = parseFloat($('.paper-price-value').val());
            var qty = parseInt($('.js-product-qty').val())
            paperPrice = paperPrice * qty;
        }
        if ($('#buy-ebook').is(':checked')) {
            ebookPrice = parseFloat($('.ebook-price-value').val());
        }
        if ($('#buy-audio').is(':checked')) {
            audioPrice = parseFloat($('.audio-price-value').val());
        }
        if ($('#buy-multimedia').is(':checked')) {
            multimediaPrice = parseFloat($('.multimedia-price-value').val());
        }
        var total_pr = ebookPrice + paperPrice + audioPrice + multimediaPrice;
        $('.total_pr .price').html(total_pr.format(0, 3, '.', ',') + '₫');
    },
    calculate_money: function (b = false) {
        checkout.loading(".section-checkout", "show")
        //Tính tổng tiền
        var total_cost = 0;
        var total_price = 0;
        var total_discount_book = 0;
        var len = $('.cart-item').length;
        var count = 0;
        $('.cart-item').each(function (index) {
            const checkbox = $(this).find('input[type="checkbox"]');
            if (checkbox.is(":checked")) {
                count++;
                var total_cost_value = parseFloat($(this).find('.total-cost-value').val());
                var total_discount_value = parseFloat($(this).find('.total-discount-value').val());
                var total_discount_voucher = parseFloat($(this).find('.total-discount-voucher').val());
                var total_discount = total_discount_value + total_discount_voucher;
                total_cost += total_cost_value;
                total_discount_book += total_discount;
            }

            if (index === (len - 1)) {
                total_price = total_cost - total_discount_book;
                $('.js-cart-cost').html(total_cost.format(0, 3, '.', ','));
                $('.js-cart-discount-book').html('-' + total_discount_book.format(0, 3, '.', ','));
                $('.bill-total-price').val(total_price);
                $('.js-cart-price').html(total_price.format(0, 3, '.', ','));
                var total_feeship = parseFloat($('.bill-total-feeship').val());
                var discount_feeship = parseFloat($('.bill-discount-feeship').val());
                var discount_order = parseFloat($('.bill-discount-order').val());
                var total_payment = total_price - discount_order + total_feeship - discount_order;
                $('.js-cart-payment').html(total_payment.format(0, 3, '.', ','));
                if (count > 0) {
                    $('#btn-cart-payment').removeClass('d-none');
                }
                else {
                    $('#btn-cart-payment').addClass('d-none');
                }
                var p = 0;
                if (b === true) {
                    var code = $('#voucher-code').val();
                    if (code !== '' && code !== null && code !== undefined) {
                        p = 1;
                        checkout.voucher();
                        checkout.loading(".section-checkout", "hide");
                    }
                }
                if (p === 0) {
                    $.post("/checkout/promotion_total_ordervalue", { total_price: total_price }, function (data) {
                        $('.bill-discount-order').val(data.DiscountOrder);
                        $('.js-cart-discount-order').html('-' + data.DiscountOrder.format(0, 3, '.', ','));
                        var TotalPayment = data.TotalPayment + total_feeship - discount_feeship;
                        $('.js-cart-payment').html(TotalPayment.format(0, 3, '.', ','));
                        if (data.HtmlGift !== undefined) {
                            $('.cart-gift-item').html(data.HtmlGift);
                            $('.cart-gift').html(data.TotalGift);
                        } else {
                            $('.cart-gift-item').html('');
                            $('.cart-gift').html('0');
                        }
                        checkout.loading(".section-checkout", "hide");
                    }).fail(function (response) {
                        checkout.loading(".section-checkout", "hide");
                    });
                }
            }
        });
    },
    popup_confirm: function (elm, message, title) {
        elm = '.alert-' + elm;
        $(elm).closest('.alert-modal-content').find('.alert-title').html(title)
        $(elm).closest('.alert-modal-content').find('.alert-text').html(message)
        $(elm).closest('.alert-modal-content').addClass('active');
        $('html').css({ "overflow": "hidden" });
    },
    dropdown: function (elm) {
        var selectOptions = $(elm).find('.select-options');
        if (selectOptions.hasClass('active')) {
            selectOptions.removeClass('active')
        } else {
            $('.select-options').removeClass('active');
            selectOptions.addClass('active')
        }
    },
    dropdown_selected: function (elm, bid, e, p, price) {
        $(elm).closest('.cart-item').find('.total-cost-value').val(price);
        $(elm).closest('.cart-item').find('.total-price-show').html(price.format(0, 3, '.', ','));
        $(elm).closest('.cart-item').find('.total-price-show-1').html(price.format(0, 3, '.', ','));
        var text = $(elm).html();
        $(elm).closest('.cart-item').find('.select-label').html(text);
        var cartItem = {
            BookId: bid,
            Quantity: 1,
            BookType: e,
            PagkageId: p
        }
        checkout.update_cart(elm, cartItem);
    }
}
/* ============================= 11, Slider============================= */
const typicalSilder = {
    init: function () {
        this.typicalSilder(".book_hot_home", 6, true, 0);

        this.typicalSilder(".book_care", 6, false, 15);
        this.typicalSilder(".book_same_author", 6, false, 15);
        this.typicalSilder(".book_same_category", 6, false, 15);

        this.typicalSilder(".book_sl_home", 6, false, 0);
        this.typicalSilder(".book_sl_home_mb", 6, false, 15);

        this.typicalSilder(".book_slide_left", 5, false, 15);
    },
    typeScroll: function (box) {
        var isDown = false;
        var startX;
        var startY;
        var scrollLeft;
        var scrollTop;
        box.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - box.offsetLeft;
            startY = e.pageY - box.offsetTop;
            scrollLeft = box.scrollLeft;
            scrollTop = box.scrollTop;
            box.style.cursor = 'grabbing';
        });
        box.addEventListener('mouseleave', () => {
            isDown = false;
            box.style.cursor = 'grab';
        });
        box.addEventListener('mouseup', () => {
            isDown = false;
            box.style.cursor = 'grab';
        });
        document.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            var x = e.pageX - box.offsetLeft;
            var y = e.pageY - box.offsetTop;
            var walkX = (x - startX) * 0.8; // Change this number to adjust the scroll speed
            var walkY = (y - startY) * 0.8; // Change this number to adjust the scroll speed
            box.scrollLeft = scrollLeft - walkX;
            box.scrollTop = scrollTop - walkY;
        });
    },
    typicalSilder: function (elm, number, auto, margin) {
        var $owl = $(elm).owlCarousel({
            loop: false,
            margin: margin,
            lazyLoad: true,
            autoplay: auto,
            autoplayTimeout: 6000,
            autoplayHoverPause: false,
            smartSpeed: 300,
            nav: true,
            dots: false,
            autoWidth: false,
            responsive: {
                0: {
                    items: 3,
                },
                600: {
                    items: 2,
                },
                768: {
                    items: 3.5,
                },
                769: {
                    items: 3.2,
                },
                1000: {
                    items: number,
                },
                1024: {
                    items: number,
                },
                1200: {
                    items: number,
                },
            },
            navText: [
                '<img src="' + UrlCdn + '/Content/assets/images/typical-book/prev.svg">',
                '<img src="' + UrlCdn + '/Content/assets/images/typical-book/next.svg">']
        });
        $owl.trigger("refresh.owl.carousel");
    }
};
/* ============================= 13, Owl Slider ============================= */
const owl = {
    init: function () {
        this.latestNewsSlider();
        this.setupBookDetailCarousel();
        this.setupNxbCarousel();
    },
    latestNewsSlider: function () {
        $(".latest-news__body-box").owlCarousel({
            items: 1,
            responsive: {
                1200: {
                    item: 1
                },
                992: {
                    items: 1
                },
                768: {
                    items: 1
                },
                480: {
                    items: 1
                },
                0: {
                    items: 1
                }
            },
            loop: false,
            rewind: false,
            autoplay: true,
            autoplayTimeout: 6000,
            autoplayHoverPause: true,
            smartSpeed: 300,
            dots: false,
            dotsEach: false,
            nav: true,
            navText: ['<img src="' + UrlCdn + '/Content/assets/images/latest-news/left.svg">', '<img src="' + UrlCdn + '/Content/assets/images/latest-news/right.svg">'],
            autoWidth: false,
            margin: 20,
        });
    },
    setupBookDetailCarousel: function () {
        let activeIndex = 0;
        const listSlider = document.querySelector(
            ".BookDetailSection-preview-list-group"
        );
        const listSliderItems = listSlider?.querySelectorAll(
            ".BookDetailSection-preview-list-item"
        );
        const arrowUp = document.querySelector(
            ".BookDetailSection-preview-list-arrow.prev"
        );
        const arrowDown = document.querySelector(
            ".BookDetailSection-preview-list-arrow.next"
        );
        const $owl = $("#BookDetailSection-carousel").owlCarousel({
            responsive: {
                0: {
                    items: 1,
                    nav: true,
                    mouseDrag: true,
                    touchDrag: true,
                },
                991: {
                    items: 1,
                    mouseDrag: false,
                    touchDrag: false,
                },
            },
            loop: false,
            autoplay: false,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            smartSpeed: 300,
            lazyLoad: true,
            dots: false,
            nav: true,
            navText: [
                '<img src="/Content/assets/icons/icon-angle-left-gray-light.svg" alt="" />',
                '<img src="/Content/assets/icons/icon-angle-right-gray-light.svg" alt="" />',
            ],
            margin: 0,
        });
        arrowUp?.addEventListener?.("click", () => {
            listSlider.scrollTop = listSlider.scrollTop - 85 - 15;
        });

        arrowDown?.addEventListener?.("click", () => {
            listSlider.scrollTop = listSlider.scrollTop + 85 + 15;
        });
        listSliderItems?.forEach?.((item, index) =>
            item.addEventListener("click", () => {
                activeIndex = index;
                $owl.trigger("to.owl.carousel", [index, 500]);
                listSliderItems.forEach((i) => i.classList.remove("active"));
                item.classList.add("active");
            })
        );
        listSliderItems?.[activeIndex]?.classList?.add?.("active");
    },
    setupNxbCarousel: function () {
        $("#NxbCarousel-carousel").owlCarousel({
            responsive: {
                0: {
                    items: 2.5,
                    margin: 16,
                },
                768: {
                    items: 4,
                    margin: 24,
                },
                991: {
                    items: 5,
                    margin: 24,
                },
            },
            loop: false,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            smartSpeed: 300,
            dots: false,
            nav: true,
            navText: [
                '<img src="/Content/assets/icons/icon-arrow-circle-left.svg">',
                '<img src="/Content/assets/icons/icon-arrow-circle-right.svg">',
            ],
            margin: 24,
        });
    }
}
/* ============================= 16, Home Slider ============================= */
const homeSilder = {
    init: function () {
        this.homeSlider();
    },
    homeSlider: function () {
        var $owl = $(".home-slider .owl-carousel").owlCarousel({
            items: 1,
            responsive: {
                1024: {
                    item: 1
                },
                991: {
                    items: 1
                },
                768: {
                    items: 1
                },
                320: {
                    items: 1
                },
                0: {
                    items: 1
                }
            },
            loop: false,
            rewind: false,
            autoplay: true,
            autoplayTimeout: 6000,
            autoplayHoverPause: true,
            smartSpeed: 600,
            mouseDrag: true,
            nav: true,
            navText: ['<img src="' + UrlCdn + '/Content/assets/images/home-slider/back.svg">', '<img src="' + UrlCdn + '/Content/assets/images/home-slider/next.svg">'],
            autoWidth: false,
            margin: 10,
        });
        $owl.trigger('refresh.owl.carousel');
    }
}
/* ============================= 17, Home Slider Mobile ============================= */
const homeSilderMobile = {
    init: function () {
        this.homeSliderMb();
    },
    homeSliderMb: function () {
        var $owl = $(".home-sliderMb__inner .owl-carousel").owlCarousel({
            items: 1,
            responsive: {
                1024: {
                    item: 1
                },
                991: {
                    items: 1
                },
                768: {
                    items: 1
                },
                320: {
                    items: 1
                },
                0: {
                    items: 1
                }
            },
            loop: false,
            lazyLoad: true,
            rewind: false,
            autoplay: true,
            autoplayTimeout: 6000,
            autoplayHoverPause: true,
            smartSpeed: 500,
            mouseDrag: true,
            nav: false,
            autoWidth: false,
            margin: 0
        });
        $owl.trigger('refresh.owl.carousel');
    }
}
/* ============================= 19, Checkout Modal  ============================= */
const checkoutModal = {
    init: function () {
        this.setupModal()
    },
    setupModal: function () {
        const modal = $('.checkout__modal__wrapper')
        const openModal = $('.js-checkout-modal-open')
        const overlay = $('.checkout__modal__wrapper .checkout__modal__overlay')
        const closeModal = $('.checkout__modal__wrapper .checkout__modal__close')
        openModal.click(() => {
            modal.addClass('active')
        })
        overlay.click(() => {
            modal.removeClass('active')
        })
        closeModal.click(() => {
            modal.removeClass('active')
        })
    },
}
/* ============================= 20, MegaMenu Overlay  ============================= */
const megaMenuOverlay = {
    init: function () {
        this.overlayMega();
    },
    overlayMega: function () {
        const wrap = $('.wrapper');
        const menu = $('.dropdown-menu');
        const overlay = $('.menu__component-overlay');
        const menuBtn = $('.menu__category');
        overlay.css('height', wrap.height());
        menu.mouseover(function () {
            overlay.show();
        })
        menu.mouseout(function () {
            overlay.hide();
        })
        menuBtn.mouseover(function () {
            overlay.show();
        })
        menuBtn.mouseout(function () {
            overlay.hide();
        })
    }
}
/* ============================= 21, Read More Payment  ============================= */
const readMorePayment = {
    init: function () {
        this.readMorePayment();
    },
    readMorePayment: function () {
        const moreRead = document.querySelector('.content-more');
        const clickBtn = document.querySelector('.load-more-btn');
        const opt = document.querySelector('.btn_readmore');
        const detailBtn = $('.btn-readmore__detail');
        if (moreRead && clickBtn && opt) {
            clickBtn.addEventListener('click', () => {
                moreRead.classList.toggle('load-more-active');
                var hClass = $(moreRead).hasClass('load-more-active');
                console.log(hClass)
                if (!hClass) {
                    clickBtn.innerHTML = 'Thu gọn <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.3541 11.3541C14.3076 11.4006 14.2525 11.4376 14.1917 11.4628C14.131 11.488 14.0659 11.501 14.0001 11.501C13.9343 11.501 13.8692 11.488 13.8084 11.4628C13.7477 11.4376 13.6925 11.4006 13.6461 11.3541L8.00008 5.70708L2.35408 11.3541C2.3076 11.4006 2.25241 11.4374 2.19167 11.4626C2.13093 11.4878 2.06583 11.5007 2.00008 11.5007C1.93434 11.5007 1.86924 11.4878 1.8085 11.4626C1.74776 11.4374 1.69257 11.4006 1.64608 11.3541C1.5996 11.3076 1.56272 11.2524 1.53756 11.1917C1.5124 11.1309 1.49945 11.0658 1.49945 11.0001C1.49945 10.9343 1.5124 10.8692 1.53756 10.8085C1.56272 10.7478 1.5996 10.6926 1.64608 10.6461L7.64608 4.64608C7.69253 4.59952 7.74771 4.56258 7.80845 4.53737C7.8692 4.51216 7.93432 4.49919 8.00008 4.49919C8.06585 4.49919 8.13097 4.51216 8.19172 4.53737C8.25246 4.56258 8.30764 4.59952 8.35408 4.64608L14.3541 10.6461C14.4006 10.6925 14.4376 10.7477 14.4628 10.8084C14.488 10.8692 14.501 10.9343 14.501 11.0001C14.501 11.0659 14.488 11.131 14.4628 11.1917C14.4376 11.2525 14.4006 11.3076 14.3541 11.3541Z" fill="white"/></svg>';
                    opt.classList.remove('active');
                } else {
                    $(clickBtn).html(`Xem đầy đủ <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.64592 4.64592C1.69236 4.59935 1.74754 4.56241 1.80828 4.5372C1.86903 4.512 1.93415 4.49902 1.99992 4.49902C2.06568 4.49902 2.13081 4.512 2.19155 4.5372C2.2523 4.56241 2.30747 4.59935 2.35392 4.64592L7.99992 10.2929L13.6459 4.64592C13.6924 4.59943 13.7476 4.56255 13.8083 4.53739C13.8691 4.51223 13.9342 4.49929 13.9999 4.49929C14.0657 4.49929 14.1308 4.51223 14.1915 4.53739C14.2522 4.56255 14.3074 4.59943 14.3539 4.64592C14.4004 4.6924 14.4373 4.74759 14.4624 4.80833C14.4876 4.86907 14.5005 4.93417 14.5005 4.99992C14.5005 5.06566 14.4876 5.13076 14.4624 5.1915C14.4373 5.25224 14.4004 5.30743 14.3539 5.35392L8.35392 11.3539C8.30747 11.4005 8.2523 11.4374 8.19155 11.4626C8.1308 11.4878 8.06568 11.5008 7.99992 11.5008C7.93415 11.5008 7.86903 11.4878 7.80828 11.4626C7.74754 11.4374 7.69236 11.4005 7.64592 11.3539L1.64592 5.35392C1.59935 5.30747 1.56241 5.2523 1.5372 5.19155C1.512 5.13081 1.49902 5.06568 1.49902 4.99992C1.49902 4.93415 1.512 4.86903 1.5372 4.80828C1.56241 4.74754 1.59935 4.69236 1.64592 4.64592Z" fill="white"/></svg>`);
                    opt.classList.add('active');
                }
            })
        }
        detailBtn.click(function () {
            if (!$(this).hasClass('active')) {
                $(this).css('top', '-44px');
            }
            if ($(this).hasClass('active')) {
                $(this).css('top', '-75px');
            }
        })
    }
}
/* ============================= 22, modal orderDetail  ============================= */
const modalOrderDetail = {
    init: function () {
        this.orderDetail();
    },
    orderDetail: function () {
        let idOrder;
        let loadpage = false;
        $(document).on('click', '.see-desktop', function () {
            idOrder = $(this).closest('.item').attr("data-id");
            var code = $(this).closest('.item').attr("data-code");
            $.get('/customer/order/' + code, function (data) {
                $('#see-desktop .modal-body').html(data);
                $('#see-desktop').modal({ show: true })
            })
        })
        $(document).on('click', '#see-desktop .close', function () {
            $('#see-desktop').modal('hide');
        })
        $(document).on('click', '.modal-orderDetail-ovelay', function () {
            $(this).removeClass('active');
            $('.modal-orderDetail').removeClass('active');
            $('html').css({ "overflow": "unset" })
        })
        $(document).on('click', '.popup-cancel', function () {
            loadpage = true;
            idOrder = $(this).closest('.item').attr("data-id");
            checkout.popup_confirm('confirm', 'Vui lòng xác nhận để hủy đơn hàng', 'Xác nhận hủy đơn hàng');
        })
        $(document).on('click', '.btn-confirm-cancel', function () {
            $.post('/customer/cancel/order', { 'orderId': idOrder }, function (data) {
                if (data.Error == true) {
                    checkout.noti('error', data.Message);
                } else {
                    $('.orderDetail-btn.delete').remove();
                    checkout.noti('success', data.Message);
                    if (loadpage == true) {
                        setTimeout(function () { window.location.reload(); }, 1000);
                        loadpage = false;
                    }
                }
            })
        })
        $(document).on('click', '.btn-edit-address', function () {
            $('.section-checkout__left').show();
            $('.bot-table').hide();
            $('.info-money').hide();
        })
        $(document).on('click', '#btn-cancel-address', function () {
            $('.section-checkout__left').hide();
            $('.bot-table').show();
            $('.info-money').show();
        })
        $(document).on('click', '#btn-save-address', function () {
            $.post('/customer/update/order', $('#frm-edit-address').serialize(), function (data) {
                if (data.Error == true) {
                    checkout.noti('error', data.Message);
                } else {
                    checkout.noti('success', data.Message);
                    $('.section-checkout__left').hide();
                    $('.bot-table').show();
                    $('.info-money').show();
                }
            })
        })
        /*mobile*/
        $(document).on('click', '.btn-edit-address-mb', function () {
            $('.info-gr2').hide();
            $('.detail-phone').hide();
            $('.edit-order-history').show();
        })
        $(document).on('click', '#btn-cancel-address-mb', function () {
            $('.info-gr2').show();
            $('.detail-phone').show();
            $('.edit-order-history').hide();
            document.getElementById('info-cus-mb').scrollIntoView();
        })
        $(document).on('click', '#btn-save-address-mb', function () {
            $.post('/customer/update/order', $('#frm-edit-address').serialize(), function (data) {
                if (data.Error == true) {
                    checkout.noti('error', data.Message);
                } else {
                    checkout.noti('success', data.Message);
                    window.location.reload();
                }
            })
        })
    }
}
/* ============================= 23, sweet Alert  ============================= */
const sweetAlert = {
    init: function () {
        this.alertPopUp();
    },
    alertPopUp: function () {
        $(document).on('click', '.btn-alert', function () {
            var data = $(this).data('class');
            $(data).closest('.alert-modal-content').addClass('active');
            $('html').css({ "overflow": "hidden" });
        })
        $(document).on('click', '.close-modal', function (e) {
            e.preventDefault();
            $('.alert-modal-content').removeClass('active');
            $('html').css({ "overflow": "unset" });
            e.stopPropagation();
        })
        $(document).on('click', '.alert-modal-content', function (e) {
            $('html').css({ "overflow": "unset" });
            $(this).removeClass('active');
        })
        $(document).on('click', '.alert-modal', function (e) {
            e.stopPropagation()
        })
    }
}
/* ============================= 24, FixScrollbarOpenCheckoutModal ============================= */
const fixScrollBarCheckout = {
    init: function () {
        this.fixScrollBar();
    },
    fixScrollBar: function () {
        var checkoutModal = $('.checkout__modal__wrapper');
        if (checkoutModal.hasClass('active')) {
            $("body").addClass("modal-open");
        }
        checkoutModal.click(function (e) {
            if (!$(this).hasClass('active')) {
                $("body").removeClass('modal-open');
            }
        })
    }
}
/* ============================= 26, viewmore ============================= */
const viewmore = {
    init: function () {
        this.toggleviewmore();
    },
    toggleviewmore: function () {
        var partnerAuthor = $('.partner__author-resume');
        var partnerWraper = $('.partner__author-wrapper');
        if ($('.partner__author-wrapper').position() != undefined) {
            var desPos = $('.partner__author-wrapper').position().top;
            var btn = $('[data-toggle="collapse"]');
            btn.click(function () {
                $(this).toggleClass("active");
                if ($(this).hasClass("active")) {
                    partnerAuthor.toggleClass('show');
                    partnerWraper.toggleClass('active');
                    $(this).html('Thu Gọn <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.3541 11.3541C14.3076 11.4006 14.2525 11.4376 14.1917 11.4628C14.131 11.488 14.0659 11.501 14.0001 11.501C13.9343 11.501 13.8692 11.488 13.8084 11.4628C13.7477 11.4376 13.6925 11.4006 13.6461 11.3541L8.00008 5.70708L2.35408 11.3541C2.3076 11.4006 2.25241 11.4374 2.19167 11.4626C2.13093 11.4878 2.06583 11.5007 2.00008 11.5007C1.93434 11.5007 1.86924 11.4878 1.8085 11.4626C1.74776 11.4374 1.69257 11.4006 1.64608 11.3541C1.5996 11.3076 1.56272 11.2524 1.53756 11.1917C1.5124 11.1309 1.49945 11.0658 1.49945 11.0001C1.49945 10.9343 1.5124 10.8692 1.53756 10.8085C1.56272 10.7478 1.5996 10.6926 1.64608 10.6461L7.64608 4.64608C7.69253 4.59952 7.74771 4.56258 7.80845 4.53737C7.8692 4.51216 7.93432 4.49919 8.00008 4.49919C8.06585 4.49919 8.13097 4.51216 8.19172 4.53737C8.25246 4.56258 8.30764 4.59952 8.35408 4.64608L14.3541 10.6461C14.4006 10.6925 14.4376 10.7477 14.4628 10.8084C14.488 10.8692 14.501 10.9343 14.501 11.0001C14.501 11.0659 14.488 11.131 14.4628 11.1917C14.4376 11.2525 14.4006 11.3076 14.3541 11.3541Z" fill="white"/></svg>')
                } else {
                    $(window).scrollTop(desPos);
                    setTimeout(function () {
                        partnerAuthor.toggleClass('show');
                        partnerWraper.toggleClass('active');
                        btn.html('Xem đầy đủ <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.64592 4.64592C1.69236 4.59935 1.74754 4.56241 1.80828 4.5372C1.86903 4.512 1.93415 4.49902 1.99992 4.49902C2.06568 4.49902 2.13081 4.512 2.19155 4.5372C2.2523 4.56241 2.30747 4.59935 2.35392 4.64592L7.99992 10.2929L13.6459 4.64592C13.6924 4.59943 13.7476 4.56255 13.8083 4.53739C13.8691 4.51223 13.9342 4.49929 13.9999 4.49929C14.0657 4.49929 14.1308 4.51223 14.1915 4.53739C14.2522 4.56255 14.3074 4.59943 14.3539 4.64592C14.4004 4.6924 14.4373 4.74759 14.4624 4.80833C14.4876 4.86907 14.5005 4.93417 14.5005 4.99992C14.5005 5.06566 14.4876 5.13076 14.4624 5.1915C14.4373 5.25224 14.4004 5.30743 14.3539 5.35392L8.35392 11.3539C8.30747 11.4005 8.2523 11.4374 8.19155 11.4626C8.1308 11.4878 8.06568 11.5008 7.99992 11.5008C7.93415 11.5008 7.86903 11.4878 7.80828 11.4626C7.74754 11.4374 7.69236 11.4005 7.64592 11.3539L1.64592 5.35392C1.59935 5.30747 1.56241 5.2523 1.5372 5.19155C1.512 5.13081 1.49902 5.06568 1.49902 4.99992C1.49902 4.93415 1.512 4.86903 1.5372 4.80828C1.56241 4.74754 1.59935 4.69236 1.64592 4.64592Z" fill="white"/></svg>')
                    }, 700);
                }
            });
        }
    }
}
/* ============================= 27, Fix Input Control Mobile ============================= */
const fixInputControlMobile = {
    init: function () {
        this.fixInputControlMobile();
    },
    fixInputControlMobile: function () {
        const input = $('.filter__menu-box .box-price__form .form-item .input-control');
        input.focus(function () {
            $(".box__cancle-mobile").hide()
        })
        input.blur(function () {
            $(".box__cancle-mobile").show()
        })
    }
}
/* ============================= 28, home dextop parner-author============================= */
const partnerAuthor = {
    init: function () {
        this.partnerAuthorSlider();
    },
    partnerAuthorSlider: function () {
        $('.partner-author.--partner .partner-author__slider').owlCarousel({
            loop: false,
            lazyLoad: true,
            margin: 28,
            nav: true,
            dots: false,
            responsive: {
                0: {
                    items: 2.3,
                    margin: 22,
                    nav: true
                },
                600: {
                    items: 3,
                    margin: 24
                },
                1000: {
                    items: 5
                }
            }
        })
        $('.partner-author.--author .partner-author__slider').owlCarousel({
            loop: false,
            lazyLoad: true,
            margin: 28,
            nav: true,
            dots: false,
            responsive: {
                0: {
                    items: 2.6,
                    margin: 15,
                    nav: true
                },
                600: {
                    items: 3,
                    margin: 24
                },
                1000: {
                    items: 5
                }
            }
        })
        $('.partner-author .partner-author__slider .owl-nav .owl-prev').html('<img src="assets/images/prevsl.svg">');
        $('.partner-author .partner-author__slider .owl-nav .owl-next').html('<img src="assets/images/nextsl.svg">');
        $(window).on("resize load", function () {
            wightScreen = screen.width;
            if (wightScreen < 767) {
                $('.partner-author .partner-author__slider .owl-nav .owl-next').html('<img src="assets/images/arrowrmb.svg">');
            } else {
                $('.partner-author .partner-author__slider .owl-nav .owl-next').html('<img src="assets/images/nextsl.svg">');
            }
        })
    },
};
/* ============================= 29, home dextop parner-author============================= */
const collectionSlider = {
    init: function () {
        this.collectionSlider();
    },
    collectionSlider: function () {
        var $owl = $(".collection-slider .owl-carousel").owlCarousel({
            responsive: {
                0: {
                    item: 1.5,
                },
                375: {
                    items: 1.5,
                },
                425: {
                    items: 1.5,
                },
                768: {
                    items: 3,
                },
                1000: {
                    items: 4,
                },
            },
            loop: false,
            rewind: false,
            autoplay: false,
            autoplayTimeout: 6000,
            autoplayHoverPause: true,
            smartSpeed: 600,
            mouseDrag: true,
            lazyLoad: true,
            nav: true,
            dots: false,
            navText: [
                '<img src="' + UrlCdn + '/Content/assets/images/collection/prev.png">',
                '<img src="' + UrlCdn + '/Content/assets/images/collection/next.png">',
            ],
            autoWidth: false,
            margin: 30,
        });
        $owl.trigger("refresh.owl.carousel");
    },
};
/* ============================= 30, plyr============================= */
const nxb_plyr = {
    init: function () {
        this.nxb_plyr_play();
    },
    nxb_plyr_play: function () {
        const video = document.querySelectorAll('video');
        for (var i = 0; i < video.length; i++) {
            const player = new Plyr(video[i], { captions: { active: true, update: true, language: 'en' } });
            window.player = player;
        }
    },
};
/* ============================= 31, submenu child============================= */
const subMenuChild = {
    init: function () {
        this.subMenuChild();
    },
    subMenuChild: function () {
        $(".submenu__list .list__item .list__link").click(function () {
            var target = $(this).parent().children(".submenu-child");
            $(target).slideToggle();
        });
    },
};
/* ============================= 32, Video viewer Display ============================= */
const videoViewerPage = {
    init: function () {
        this.showAccordion();
    },
    showAccordion: function () {
        $('.learning-content').click(function () {
            $('.roate-icon').toggleClass("active");
            $('.slidebar-content-left').toggleClass("active");
            $('.video-detail-text').toggleClass("change--width");
        })
        $('.panel-change-icon').click(function () {
            $(this).toggleClass("active");
        })
    }
}
/* =============================33,btn-show-list-study================================*/
const list_video = {
    init: function () {
        this.list_video();
    },
    list_video: function () {
        $("#btn-list-video").bind('click', function () {
            $("#list-video").slideToggle();
        })
    }
};
/* =============================34,cate-filter-mb================================*/
const cate_filter = {
    init: function () {
        this.choose();
    },
    choose: function () {
        $(".cate-filter__control .control-value").click(function () {
            $(".cate-filter__dropdow").toggleClass("active");
            if ($(".cate-filter__dropdow").hasClass("active")) {
                $("body").css("overflow", "hidden");
            } else {
                $("body").css("overflow", "unset");
            }
        });
        $(".cate-filter__dropdow").click(function () {
            $(this).removeClass("active");
            if (!$(".cate-filter__dropdow").hasClass("active")) {
                $("body").css("overflow", "unset");
            }
        });
        $(".cate-filter__dropdow li").click(function () {
            let text = $(this).find("span").html();
            let value = $(this).find("input[type='radio']").val();
            let valueSelect = $(this)
                .closest(".cate-filter__control")[0]
                .querySelector(".control-value input");
            let elementText = $(this)
                .closest(".cate-filter__control")[0]
                .querySelector(".control-value h6");
            $(valueSelect).attr("value", value);
            $(elementText).html(text);
        });
        $(".cate-filter__button button").click(function () {
            $(".cate-filter__button button").removeClass("active");
            $(this).addClass("active");
        });
    },
};
/* ============================= 35, Tab Wrapper  ============================= */
const tabWrapper = {
    init: function () {
        this.config()
    },
    config: function () {
        const tabItems = $('.tab__wrapper .tab__group .tab__item')
        const tabMainItems = $('.tab__wrapper .tab__main__group .tab__item')
        tabItems.click(function (e) {
            tabItems.removeClass('active')
            tabMainItems.removeClass('active')
            $(this).addClass('active')
            tabMainItems[$(this).index()].classList.add('active')
        })
    }
}
/* ============================= 36, Topic============================= */
const topicMobile = {
    init: function () {
        this.topicSlider();
    },
    topicSlider: function () {
        var $owl = $(".topic-box-mb").owlCarousel({
            responsive: {
                0: {
                    item: 1.5,
                },
                375: {
                    items: 2,
                },
                425: {
                    items: 2.5,
                },
            },
            loop: false,
            rewind: false,
            autoplay: true,
            autoplayTimeout: 6000,
            autoplayHoverPause: true,
            smartSpeed: 600,
            mouseDrag: true,
            lazyLoad: true,
            nav: false,
            dots: false,
            autoWidth: false,
            margin: 15,
        });
        $owl.trigger("refresh.owl.carousel");
    },
};
/*=============================38, Change-border-color-chon-book=========================*/
const borderColor = {
    init: function () {
        this.borderColor();
    },
    borderColor: function () {
        const wrap = document.querySelector(".category-li");
        var optionsBtn;
        if (wrap) {
            optionsBtn = wrap.querySelectorAll(".li-item");
        }
        if (optionsBtn) {
            optionsBtn.forEach((item1) => {
                const a = item1.querySelectorAll(".category-li__item");
                a.forEach((item2) => {
                    item2.addEventListener("click", () => {
                        item1.classList.toggle("bd-color");
                    });
                });
            });
        }
    },
};

const categoryPanel = {
    init: function () {
        this.config();
    },
    config: function () {
        const allItems = document.querySelectorAll(".category-panel-item-wrapper");
        allItems.forEach((item) =>
            item.addEventListener("click", () => {
                item.classList.toggle("active");
                const parent = item.parentNode;
                const subItems = parent.querySelector(".category-panel-subitem");

                if (subItems) {
                    subItems?.classList?.toggle("active");
                } else {
                    const link = parent.querySelector(".category-panel-item-link").href;
                    window.location.href = link;
                }
            })
        );
    },
};

const pdf = {
    init: function () {
        this.config();
    },
    config: function () {
        const pdfViews = document.querySelectorAll(".pdf-view-file");
        // pdfjsLib.GlobalWorkerOptions.workerSrc = '/Content/assets/js/pdf.worker.min.js';

        pdfViews.forEach((item) => {
            let numPages = 0;
            const url = item.dataset.url;
            const loadingTask = pdfjsLib.getDocument(url);
            loadingTask.promise.then(
                function (pdf) {
                    numPages = pdf.numPages;
                    const viewer = item;

                    for (page = 1; page <= pdf.numPages; page++) {
                        canvas = document.createElement("canvas");
                        canvas.className = "pdf-page-canvas";
                        viewer.appendChild(canvas);
                        renderPage(page, canvas);
                    }

                    function renderPage(pageNumber, canvas) {
                        pdf.getPage(pageNumber).then(function (page) {
                            console.log("Page loaded");

                            var scale = 1.5;
                            var viewport = page.getViewport(scale);

                            var context = canvas.getContext("2d");
                            canvas.height = viewport.height;
                            canvas.width = viewport.width;

                            var renderContext = {
                                canvasContext: context,
                                viewport: viewport,
                            };

                            var renderTask = page.render(renderContext);

                            renderTask.promise.then(function () {
                                console.log("Page rendered");
                            });
                        });
                    }
                },
                function (reason) {
                    // PDF loading error
                    console.error(reason);
                }
            );
        });
    },
};
const copyText = {
    init: function () {
        this.config();
    },
    config: function () {
        const copyElements = document.querySelectorAll(".js-copy");

        copyElements.forEach((item) =>
            item.addEventListener("click", () => {
                const data = item.dataset.copy;
                const el = document.createElement("textarea");
                el.value = data;
                document.body.appendChild(el);
                el.select();
                document.execCommand("copy");
                document.body.removeChild(el);
            })
        );
    },
};

const seeMoreSection = {
    init: function () {
        this.config();
    },
    config: function () {
        const sections = document.querySelectorAll(".SeeMore");
        sections.forEach((item) => {
            let isExpand = false;
            const btn = item.querySelector(".SeeMore-btn");

            btn.addEventListener("click", () => {
                const text = btn.querySelector("span");
                if (isExpand) {
                    item.classList.remove("active");
                    text.innerHTML = "Xem đầy đủ";
                } else {
                    item.classList.add("active");
                    text.innerHTML = "Thu gọn";
                }

                isExpand = !isExpand;
            });
        });
    },
};

const chooseBookType = {
    init: function () {
        this.config();
    },
    config: function () {
        const allTypesBtn = document.querySelectorAll(".js-product-type-option");
        const mainModal = document.querySelector(
            ".BookDetailSection-info-options-mobile"
        );

        allTypesBtn.forEach((item, index) =>
            item.addEventListener("click", () => {
                mainModal.classList.add("active");
                const allTypesBtnInModal = mainModal.querySelectorAll(
                    ".BookDetailSection-info-type-item-wrapper input"
                );
                allTypesBtnInModal[index].checked = true;
            })
        );

        if (mainModal) {
            const overlay = mainModal.querySelector(
                ".BookDetailSection-info-options-mobile-overlay"
            );
            overlay.addEventListener("click", () => {
                mainModal.classList.remove("active");
            });
        }
    },
};

const nxbInfoModal = {
    init: function () {
        this.config();
    },
    config: function () {
        const openBtn = document.querySelector(".js-open-nxb-info-modal");
        const modal = document.querySelector(".NxbInfoModal");

        if (modal) {
            const overlay = modal.querySelector(".NxbInfoModal-overlay");
            const closeBtn = modal.querySelector(".NxbInfoModal-close");

            openBtn.addEventListener("click", () => {
                modal.classList.add("active");
            });

            overlay.addEventListener("click", () => {
                modal.classList.remove("active");
            });

            closeBtn.addEventListener("click", () => {
                modal.classList.remove("active");
            });
        }
    },
};
const select_menu_mobile = {
    init: function () {
        this.selectMobile();
    },
    selectMobile: function () {
        const body = $("body");
        const filterBtn = $("#btn-filter");
        const filterBox = $(".filter__menu");
        const filterOverlay = $(".box-overlay");
        const cancleBtn = $(".filter__menu-icon");
        const closeBtn = $(".mobile__close");
        if (filterBtn && filterOverlay && cancleBtn && closeBtn) {
            filterBtn.click(() => {

                $(".cate-filter__dropdow").removeClass("active");
                setTimeout(function () {
                    filterBox.addClass("active");
                    body.addClass("modal-open");
                }, 200);
            });
            filterOverlay.click(() => {
                filterBox.removeClass("active");
                body.removeClass("modal-open");
            });
            cancleBtn.click(() => {
                filterBox.removeClass("active");
                body.removeClass("modal-open");
            });
            closeBtn.click(() => {
                filterBox.removeClass("active");
                body.removeClass("modal-open");
            });
        }
    },
};
const cookie = {
    set: function (name, value, days) {
        var expires;
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
        } else {
            expires = "";
        }
        document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
    },
    get: function (name) {
        var nameEQ = encodeURIComponent(name) + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ')
                c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0)
                return decodeURIComponent(c.substring(nameEQ.length, c.length));
        }
        return null;
    },
    delete: function (name) {
        document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
}
function CountDown(elm, date) {
    var end = new Date(date);
    const x = setInterval(function () {
        const now = new Date().getTime();
        const distance = end - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        var sHour = hours < 10 ? "0" + hours : hours;
        var sMinutes = minutes < 10 ? "0" + minutes : minutes;
        var sSeconds = seconds < 10 ? "0" + seconds : seconds;
        var text = sHour + ":" + sMinutes + ":" + sSeconds;
        $(elm).html(text);
        if (distance < 0) {
            clearInterval(x);
            window.location.reload();
        }
    }, 1000);
}