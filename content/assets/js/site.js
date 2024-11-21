var arrOIds = new Array();
function customerSort(elm) {
    var val = $(elm).val();
    window.location.href = window.location.pathname + '?page=' + getParameters('page', 1) + '&sort=' + val;
}
function getParameters(name, valueDefault) {
    var url = window.location.href;
    if (url.indexOf("?") > 0) {
        url = url.replace("#", "&");
    } else {
        url = url.replace("#", "?");
    }
    var uri = new URL(url);
    var value = uri.searchParams.get(name);
    if (value === null) {
        value = valueDefault;
    }
    return value;
}
function changeSort(elm) {
    var linkFW = window.location.pathname;
    var page = getParameters("page", "");
    var type = getParameters("type", "");
    var lang = getParameters("lang", "");
    var fromPrice = getParameters("fromPrice", "");
    var toPrice = getParameters("toPrice", "");
    var keyword = getParameters("keyword", "");
    var authorT = getParameters("authorT", "");
    var authorM = getParameters("authorM", "");
    var authorId = getParameters("authorId", "");
    var sort = $(elm).val();
    if (page !== null && page !== "") {
        linkFW += '?page=' + page;
    }
    else {
        linkFW += '?page=1';
    }
    if (type !== null && type !== "") {
        linkFW += '&type=' + type;
    }
    if (keyword !== null && keyword !== "") {
        linkFW += '&keyword=' + keyword;
    }
    if (sort !== null && sort !== "") {
        linkFW += '&sort=' + sort;
    }
    if (lang !== null && lang !== "") {
        linkFW += '&lang=' + lang;
    }
    if (fromPrice !== null && fromPrice !== "") {
        linkFW += '&fromPrice=' + fromPrice;
    }
    if (toPrice !== null && toPrice !== "") {
        linkFW += '&toPrice=' + toPrice;
    }
    if (authorId !== null && authorId !== "") {
        linkFW += '&authorId=' + authorId;
    }
    if (authorT !== null && authorT !== "") {
        linkFW += '&authorT=' + authorT;
    }
    if (authorM !== null && authorM !== "") {
        linkFW += '&authorM=' + authorM;
    }
    window.location.href = linkFW;
}
function changeSortMobi(sort) {
    var linkFW = window.location.pathname;
    var page = getParameters("page", "");
    var type = getParameters("type", "");
    var lang = getParameters("lang", "");
    var fromPrice = getParameters("fromPrice", "");
    var toPrice = getParameters("toPrice", "");
    var keyword = getParameters("keyword", "");
    var authorT = getParameters("authorT", "");
    var authorM = getParameters("authorM", "");
    var authorId = getParameters("authorId", "");
    if (page !== null && page !== "") {
        linkFW += '?page=' + page;
    }
    else {
        linkFW += '?page=1';
    }
    if (type !== null && type !== "") {
        linkFW += '&type=' + type;
    }
    if (keyword !== null && keyword !== "") {
        linkFW += '&keyword=' + keyword;
    }
    if (sort !== null && sort !== "") {
        linkFW += '&sort=' + sort;
    }
    if (lang !== null && lang !== "") {
        linkFW += '&lang=' + lang;
    }
    if (fromPrice !== null && fromPrice !== "") {
        linkFW += '&fromPrice=' + fromPrice;
    }
    if (toPrice !== null && toPrice !== "") {
        linkFW += '&toPrice=' + toPrice;
    }
    if (authorId !== null && authorId !== "") {
        linkFW += '&authorId=' + authorId;
    }
    if (authorT !== null && authorT !== "") {
        linkFW += '&authorT=' + authorT;
    }
    if (authorM !== null && authorM !== "") {
        linkFW += '&authorM=' + authorM;
    }
    window.location.href = linkFW;
}
function CopyContent() {
    var copyText = $("#UrlPage").attr('href');
    copyText.val(copyText).select();
    document.execCommand("copy");
}
function changeLang(lang) {
    var linkFW = window.location.pathname;
    var page = getParameters("page", "");
    var type = getParameters("type", "");
    var sort = getParameters("sort", "");
    var fromPrice = getParameters("fromPrice", "");
    var toPrice = getParameters("toPrice", "");
    var keyword = getParameters("keyword", "");
    var authorT = getParameters("authorT", "");
    var authorM = getParameters("authorM", "");
    var authorId = getParameters("authorId", "");
    if (page !== null && page !== "") {
        linkFW += '?page=' + page;
    }
    else {
        linkFW += '?page=1';
    }
    if (type !== null && type !== "") {
        linkFW += '&type=' + type;
    }
    if (keyword !== null && keyword !== "") {
        linkFW += '&keyword=' + keyword;
    }
    if (sort !== null && sort !== "") {
        linkFW += '&sort=' + sort;
    }
    if (lang !== null && lang !== "") {
        linkFW += '&lang=' + lang;
    }
    if (fromPrice !== null && fromPrice !== "") {
        linkFW += '&fromPrice=' + fromPrice;
    }
    if (toPrice !== null && toPrice !== "") {
        linkFW += '&toPrice=' + toPrice;
    }
    if (authorId !== null && authorId !== "") {
        linkFW += '&authorId=' + authorId;
    }
    if (authorT !== null && authorT !== "") {
        linkFW += '&authorT=' + authorT;
    }
    if (authorM !== null && authorM !== "") {
        linkFW += '&authorM=' + authorM;
    }
    window.location.href = linkFW;
}
function changeAuthor(author) {
    var linkFW = window.location.pathname;
    var page = getParameters("page", "");
    var type = getParameters("type", "");
    var sort = getParameters("sort", "");
    var sort = getParameters("sort", "");
    var lang = getParameters("lang", "");
    var fromPrice = getParameters("fromPrice", "");
    var toPrice = getParameters("toPrice", "");
    var keyword = getParameters("keyword", "");
    var ids = getParameters("authorM", "");
    var authorId = getParameters("authorId", "");
    if (page !== null && page !== "") {
        linkFW += '?page=' + page;
    }
    else {
        linkFW += '?page=1';
    }
    if (type !== null && type !== "") {
        linkFW += '&type=' + type;
    }
    if (keyword !== null && keyword !== "") {
        linkFW += '&keyword=' + keyword;
    }
    if (sort !== null && sort !== "") {
        linkFW += '&sort=' + sort;
    }
    if (lang !== null && lang !== "") {
        linkFW += '&lang=' + lang;
    }
    if (fromPrice !== null && fromPrice !== "") {
        linkFW += '&fromPrice=' + fromPrice;
    }
    if (toPrice !== null && toPrice !== "") {
        linkFW += '&toPrice=' + toPrice;
    }
    if (authorId !== null && authorId !== "") {
        linkFW += '&authorId=' + authorId;
    }
    if (author !== null && author !== "") {
        var ischecked = $(".ckAuthor-" + author).is(':checked');
        if (ischecked) {
            linkFW += '&authorT=' + author;
        }
    }
    if (ids !== null && ids !== "") {
        linkFW += '&authorM=' + ids;
    }
    window.location.href = linkFW;
}
function changeMutiAuthor(authorIds) {
    var linkFW = window.location.pathname;
    var page = getParameters("page", "");
    var type = getParameters("type", "");
    var sort = getParameters("sort", "");
    var sort = getParameters("sort", "");
    var lang = getParameters("lang", "");
    var fromPrice = getParameters("fromPrice", "");
    var toPrice = getParameters("toPrice", "");
    var keyword = getParameters("keyword", "");
    var author = getParameters("authorT", "");
    var authorId = getParameters("authorId", "");
    if (page !== null && page !== "") {
        linkFW += '?page=' + page;
    }
    else {
        linkFW += '?page=1';
    }
    if (type !== null && type !== "") {
        linkFW += '&type=' + type;
    }
    if (keyword !== null && keyword !== "") {
        linkFW += '&keyword=' + keyword;
    }
    if (sort !== null && sort !== "") {
        linkFW += '&sort=' + sort;
    }
    if (lang !== null && lang !== "") {
        linkFW += '&lang=' + lang;
    }
    if (fromPrice !== null && fromPrice !== "") {
        linkFW += '&fromPrice=' + fromPrice;
    }
    if (toPrice !== null && toPrice !== "") {
        linkFW += '&toPrice=' + toPrice;
    }
    if (authorId !== null && authorId !== "") {
        linkFW += '&authorId=' + authorId;
    }
    if (author !== null && author !== "") {
        linkFW += '&authorT=' + author;
    }
    if (authorIds.length > 0) {
        linkFW += '&authorM=' + authorIds;
    }
    window.location.href = linkFW;
}
function changeType(type) {
    var linkFW = window.location.pathname;
    var page = getParameters("page", "");
    var sort = getParameters("sort", "");
    var lang = getParameters("lang", "");
    var fromPrice = getParameters("fromPrice", "");
    var toPrice = getParameters("toPrice", "");
    var keyword = getParameters("keyword", "");
    var authorT = getParameters("authorT", "");
    var authorM = getParameters("authorM", "");
    var authorId = getParameters("authorId", "");
    if (page !== null && page !== "") {
        linkFW += '?page=' + page;
    }
    else {
        linkFW += '?page=1';
    }
    if (type !== null && type !== "") {
        linkFW += '&type=' + type;
    }
    if (keyword !== null && keyword !== "") {
        linkFW += '&keyword=' + keyword;
    }
    if (sort !== null && sort !== "") {
        linkFW += '&sort=' + sort;
    }
    if (lang !== null && lang !== "") {
        linkFW += '&lang=' + lang;
    }
    if (fromPrice !== null && fromPrice !== "") {
        linkFW += '&fromPrice=' + fromPrice;
    }
    if (toPrice !== null && toPrice !== "") {
        linkFW += '&toPrice=' + toPrice;
    }
    if (authorId !== null && authorId !== "") {
        linkFW += '&authorId=' + authorId;
    }
    if (authorT !== null && authorT !== "") {
        linkFW += '&authorT=' + authorT;
    }
    if (authorM !== null && authorM !== "") {
        linkFW += '&authorM=' + authorM;
    }
    window.location.href = linkFW;
}
function searchPrice(elm) {
    var fromPrice = $("#FromPrice").val();
    var toPrice = $("#ToPrice").val();
    var linkFW = window.location.pathname;
    var type = getParameters("type", "");
    var page = getParameters("page", "");
    var sort = getParameters("sort", "");
    var lang = getParameters("lang", "");
    var keyword = getParameters("keyword", "");
    var authorT = getParameters("authorT", "");
    var authorM = getParameters("authorM", "");
    var authorId = getParameters("authorId", "");
    if (page !== null && page !== "") {
        linkFW += '?page=' + page;
    }
    else {
        linkFW += '?page=1';
    }
    if (type !== null && type !== "") {
        linkFW += '&type=' + type;
    }
    if (keyword !== null && keyword !== "") {
        linkFW += '&keyword=' + keyword;
    }
    if (sort !== null && sort !== "") {
        linkFW += '&sort=' + sort;
    }
    if (lang !== null && lang !== "") {
        linkFW += '&lang=' + lang;
    }
    if (authorId !== null && authorId !== "") {
        linkFW += '&authorId=' + authorId;
    }
    if (authorT !== null && authorT !== "") {
        linkFW += '&authorT=' + authorT;
    }
    if (authorM !== null && authorM !== "") {
        linkFW += '&authorM=' + authorM;
    }
    if (fromPrice !== null && fromPrice !== "") {
        linkFW += '&fromPrice=' + fromPrice;
    }
    if (toPrice !== null && toPrice !== "") {
        linkFW += '&toPrice=' + toPrice;
    }
    if (toPrice !== "" || fromPrice !== "") {
        window.location.href = linkFW;
    }
    return false;
}
function lengthcm(elm) {
    var messenger = $("#Messenger").val();
    var count = messenger.length;
    $('#length').html(count + '/1500')
}
function fn_comment(customerId, bookId, url) {
    document.getElementById("btn_comment").disabled = true;
    var Messenger = $("#Messenger").val();
    var obj = {
        CustomerID: customerId,
        BookID: bookId,
        Messenger: Messenger,
        Url: url
    }
    $.post('/books/comment', { model: obj }, function (data) {
        if (data.error == true) {
            if (data.id == "0") {
                window.location.href = data.url;
            }
            else {
                $("#Messenger").addClass("border-red");
                document.getElementById("btn_comment").disabled = false;
                noti("error", data.message);
            }
        }
        else {
            $("#Messenger").val("");
            $("#Messenger").removeClass("border-red");
            noti("success", data.message, 5000);
        }
    });
}
function sumitSearch(elm, id) {
    var arrParam = '';
    var idMselect;
    $(elm).find("input,textarea,hidden,select").not("input[type='checkbox'], .date-range-picker, #searchin").each(function () {
        idMselect = $(this).attr("name");
        if ($(this).val() !== '' && $(this).val() !== 'Từ khóa tìm kiếm')
            arrParam += "&" + idMselect + "=" + $(this).val();
    });
    idMselect = $(id).attr("name");
    if ($(id).val() !== '' && $('#keyword').val() !== '' && typeof idMselect !== "undefined")
        arrParam += "&" + idMselect + "=" + $(id).val();
    if (arrParam !== '')
        arrParam = arrParam.substring(1);
    else {
        return false;
    }
    window.location.href = '/ket-qua-tim-kiem?' + arrParam;
    return false;
}
function changeHashValue(key, value, source) {
    key = key + "=";
    if (source === undefined || source === '')
        source = $.address.value();
    source = source.replace("/", "#");
    var index = source.indexOf(key);
    if (index > -1) {
        var tempLink = source.split("&");
        for (var idx = 0; idx < tempLink.length; idx++) {
            if (tempLink[idx].includes(key)) {
                var keynew = key + tempLink[idx].split("=")[1]
                if (value !== '')
                    source = source.replace(keynew, key + value);
                else
                    source = source.replace(keynew, '');
                break;
            }
        }
    } else {
        if (source === "#" && value !== '') {
            source += key + value;
        } else if (value !== '') {
            source += "&" + key + value;
        }
    }
    source = source.replace('#&', '#');
    source = source.replace('&&', '&');
    return source;
}
function tracking(queryId) {
    jQuery.ajax({ url: '/tracking?queryId=' + queryId, async: true, cache: false });
}
Number.prototype.format = function (n, x, s, c) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
        num = this.toFixed(Math.max(0, ~~n));
    return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
};
Array.prototype.remove = function (el) {
    var idx = this.indexOf(el);
    if (idx !== -1) {
        this.splice(idx, 1);
    }
    return this;
};