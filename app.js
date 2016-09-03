//Helper Function for parsing a number string, whatever seperator was used.
function parseNum(num, sep) {
	return Number(num.split(sep)[0] + '.' + num.split(sep)[1])
}

//Request Prices
function getPrices(data, callback) {
	for(var i = 0; i < data.length; i++) {
		var sticker = data[i];
		jQuery.ajax(sticker.url, {
			headers: {
				
			},
			success: function(resp, stat, xhr) {
				sticker.lowestprice_string = resp.lowest_price;
				sticker.lowestprice = parseNum(resp.lowest_price.split('\u20ac')[0], ',');
				sticker.lowestprice_withfee = (parseNum(resp.lowest_price.split('\u20ac')[0], ',') * 0.87).toPrecision(3);
			},
			error: function(x, y, z) {
				sticker.lowestprice_string = 'undefined'
				sticker.lowestprice = 0;
				sticker.lowestprice_withfee = 0;
			}
		})
		if(i == data.length - 1) {
			callback;
		}
	}
}

function saveDataToWindow() {
	window.StickerPriceData = inv;
	jQuery('body').click()
}

var main = function() {
	getPrices(inv, saveDataToWindow());
}

jQuery(document).ready(main)