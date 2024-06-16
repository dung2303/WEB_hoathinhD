document.addEventListener('DOMContentLoaded', function() {
    var productList = document.querySelector('.ui-autocomplete.ajax-results');
    var input = document.getElementById('in');

    // Danh sách sản phẩm mẫu
    var products = [
        { name: 'Đại Chúa Tể', image: 'dai-chua-te-300x450.webp', link:'https://hoathinh3d.us/dai-chua-te' },
        { name: 'Đấu Phá Thương Khung 5', image: 'dau-pha-thuong-khung-phan-5-gia-nam-hoc-vien-3-300x450.webp', link:'https://hoathinh3d.us/dau-pha-thuong-khung-phan-5-gia-nam-hoc-vien' },
        { name: 'Đấu La Đại Lục 2', image: 'dau-la-dai-luc-2-tuyet-the-duong-mon-3-300x450.webp', link:'dau-la-dai-luc-2-tuyet-the-duong-mon-3-300x450.webp' },
        { name: 'Thần Ấn Vương Tọa', image: 'than-an-vuong-toa-2-300x450.webp', link:'https://hoathinh3d.us/than-an-vuong-toa' },
        { name: 'Phàm Nhân Tu Tiên 3', image: 'pham-nhan-tu-tien-phan-3-1-300x450.webp', link:'https://hoathinh3d.us/pham-nhan-tu-tien-phan-3' },
        { name: 'Thế Giới Hoàn Mỹ', image: 'the-gioi-hoan-my-4-300x450.jpg', link:'https://hoathinh3d.us/the-gioi-hoan-my' },
        { name: 'Thôn Phệ Tinh Không', image: 'thon-phe-tinh-khong-4-300x450.jpg', link:'https://hoathinh3d.us/thon-phe-tinh-khong' },
        { name: 'Tiên Nghịch', image: 'tien-nghich-2-300x450.webp', link:'https://hoathinh3d.us/tien-nghich'},
        { name: 'Tru Tiên 2', image: 'tru-tien-phan-2-2024-300x450.webp', link:'https://hoathinh3d.us/tru-tien' },
        { name: 'Luyện Khí Mười Vạn Năm', image: 'luyen-khi-muoi-van-nam-1-300x450.webp', link:'https://hoathinh3d.us/luyen-khi-muoi-van-nam' },
        { name: 'Sư Huynh A Sư Huynh', image: 'su-huynh-a-su-huynh-300x450.webp', link:'https://hoathinh3d.us/su-huynh-a-su-huynh' },
        { name: 'Thương Nguyên Đồ', image: 'thuong-nguyen-do-300x450.webp', link:'https://hoathinh3d.us/thuong-nguyen-do' },
        { name: 'Tây Hành Kỷ 5', image: 'tay-hanh-ky-phan-5-1-300x450.jpg', link:'https://hoathinh3d.us/tay-hanh-ky-phan-5' }
    ];

    // Xử lý khi nhập vào ô tìm kiếm
    input.addEventListener('keyup', function() {
        searchProducts(input.value.replace(/\s+/g, '').toLowerCase());
    });

    // Xử lý khi click ra ngoài danh sách sản phẩm
    document.addEventListener('click', function(event) {
        var isClickInside = productList.contains(event.target) || input.contains(event.target);
        if (!isClickInside) {
            productList.style.display = 'none';
        }
    });

    // Ngăn chặn sự kiện click từ input lan ra ngoài
    input.addEventListener('click', function(event) {
        event.stopPropagation();
    });

    // Hàm tìm kiếm sản phẩm
    function searchProducts(keyword) {
        // Xóa nội dung danh sách sản phẩm hiện tại
        productList.innerHTML = '';

        if (keyword === '') {
            productList.innerHTML = '<li>Vui lòng nhập một từ khóa</li>';
            productList.style.display = 'block';
            return;
        }

        // Tìm các sản phẩm thỏa mãn keyword
        var foundProducts = products.filter(function(product) {
            return product.name.toLowerCase().replace(/\s+/g, '').includes(keyword);
        });

        // Hiển thị các sản phẩm nếu tìm thấy
        if (foundProducts.length > 0) {
            foundProducts.forEach(function(product) {
                var li = document.createElement('li');
                
                // Tạo thẻ <a> để liên kết đến link sản phẩm
                var productLink = document.createElement('a');
                productLink.href = product.link;
                productLink.target = '_blank'; // Mở link trong tab mới
                productLink.innerHTML = `
                    <img src="${product.image}" alt="">
                    <span>${product.name}</span>
                `;
                li.appendChild(productLink);
                
                productList.appendChild(li);
            });
        } else {
            // Nếu không tìm thấy sản phẩm
            var noResultsItem = document.createElement('li');
            noResultsItem.classList.add('no-results');
            noResultsItem.innerText = `Không tìm thấy "${keyword}"`;
            productList.appendChild(noResultsItem);
        }

        // Hiển thị kết quả tìm kiếm
        productList.style.display = 'block';
    }
});

        
// Dot
        const imgPosition = document.querySelectorAll(".im img")
        const imgContainer = document.querySelector('.im')
        const dotItem = document.querySelectorAll(".dot")
        let imgNumber = imgPosition.length
        let index = 0
        imgPosition.forEach(function(image,index){
            image.style.left = index*100 +"%"
            dotItem[index].addEventListener("click",function(){
                slider(index)
            })
        })
        function imgSlide(){
            index++;
            console.log(index)
            if(index>=imgNumber){index=0}
            slider (index)
        }
        function slider (index){
            imgContainer.style.left = "-" +index*100 + "%"
            const dotActive = document.querySelector('.active')
            dotActive.classList.remove("active")
            dotItem[index].classList.add("active")
        }
        setInterval(imgSlide,5000)


// 
        function cắt_giảm_text(element) {
        const text = element.textContent;
        const chiều_rộng = element.offsetWidth;
        const chiều_dài = 23; // điều chỉnh giá trị chiều dài như cần thiết

        if (text.length > chiều_dài) {
            element.textContent = text.substring(0, chiều_dài) + '...';
        }
        }

        const h2Elements = document.querySelectorAll('h2,p');
        h2Elements.forEach((h2,p) => {
        cắt_giảm_text(h2,p);
        });