---
title: 'Tensors: Hình học và Ứng dụng - P1.2 - Giới thiệu - Phân rã tensor'
published: 2026-02-13
description: Bài toán phân rã tensor và ứng dụng
image: "./landsberg.jpg"
tags: [Toán, Tensor, Hình học, Ứng dụng, Mathematics, Geometry, Application, Đại số, Algebra, Đại số tuyến tính, Linear Algebra, Đại số đa tuyến tính, Multilinear Algebra, Tensor Decomposition, Phân rã tensor]
category: Tensor
toc: true
draft: false
---

Một ví dụ của bài toán phân rã tensor đó là viết một ánh xạ song tuyến tính $f:A\times B \to C$ dưới dạng tổng của các ánh xạ có dạng $(\bm{a},\bm{b})\mapsto \alpha(\bm{a})\beta(\bm{b})\bm{c}$ trong đó $\alpha \in A^*$, $\beta\in B^*$, $\bm{a}\in A$, $\bm{b}\in B$, $\bm{c}\in C$.

Trong các ứng dụng, người ta thu thập dữ liệu được sắp xếp dưới dạng một mảng đa chiều $T$, được xem như một tensor có hạng $R$ nhỏ. Những vấn đề ta phải đối mặt là:
- xác định giá trị thích hợp của $R$, và/hoặc
- tìm một tensor hạng $R$ "xấp xỉ" với $T$.

:::hint[<span style="color:#12a4d9;"> **Bài toán tách nguồn (source separation)** </span>]
Một bài toán trung tâm trong xử lý tín hiệu là tách nguồn, chẳng hạn “bài toán bữa tiệc cocktail”: trong một căn phòng có nhiều người đang trò chuyện. Nhiều thiết bị thu âm được đặt trong phòng để ghi lại các cuộc hội thoại. Tuy nhiên, những gì chúng ghi nhận không phải là từng cuộc trò chuyện riêng lẻ, mà là sự pha trộn của tất cả các cuộc trò chuyện. Mục tiêu là khôi phục lại nội dung mà từng người đang nói. Đáng chú ý là việc "tách trộn" này thường có thể thực hiện được bằng cách sử dụng phân rã CP. Bài toán này liên hệ với những vấn đề rộng hơn trong thống kê.
:::

## Phân rã tensor và quang phổ huỳnh quang
Người ta phân tích $I$ mẫu dung dịch; mỗi mẫu chứa các hóa chất khác nhau được pha loãng ở những nồng độ khác nhau. Mục tiêu đầu tiên là xác định số lượng $R$ các hóa chất khác nhau có mặt trong các mẫu. Có bốn chất như vậy: dihydroxybenzene, tryptophan, phenylalanine và DOPA.

Mỗi mẫu, giả sử là mẫu thứ $i$, lần lượt được kích thích bằng ánh sáng ở $J$ bước sóng khác nhau. Với mỗi bước sóng kích thích, người ta đo phổ phát xạ thu được. Giả sử cường độ ánh sáng huỳnh quang phát ra được đo tại $K$ bước sóng khác nhau. 

Do đó, với mỗi $i$, ta thu được một bảng $J\times K$, gọi là các ma trận kích thích–phát xạ (excitation–emission matrices).
Vì thế, dữ liệu thu được là một mảng ba chiều kích thước $I\times J\times K$. 

![Mô tả hình](./EEM.jpg)

Trong các cơ sở, nếu $\{\bm{e}_i\}$ là một cơ sở của $\Bbb C^I$, $\{\bm{h}_j\}$ là một cơ sở của $\Bbb C^J$, và $\{\bm{g}_i\}$ là một cơ sở của $\Bbb C^K$ thì 
$$T=\sum_{ijk} T_{ijk}\bm{e}_i \otimes \bm{h}_j \otimes \bm{g}_k.$$
Mục tiêu đầu tiên là xác định $R$ sao cho 
$$
    T \approx \sum_{r}^R \bm{a}_r \otimes \bm{b}_r \otimes \bm{c}_r,
$$
trogn đó mỗi khối $r$ biểu diễn một chất.

Viết $\bm{a}_r = a_{i,r}\bm{e}_i$, khi đó $a_{i,r}$ là nồng độ của chất thứ $r$ trong mẫu thứ $i$. Tương tự, với các cơ sở đã chọn của $\Bbb C^J$ và $\Bbb C^K$, ta có $c_{k,r}$ là tỉ lệ photon mà chất thứ $r$ phát ra tại bước sóng $k$, còn $b_{j,r}$ là cường độ của ánh sáng kích thích tại bước sóng $j$ nhân với hệ số hấp thụ tại bước sóng $j$.

:::hint[<span style="color:#12a4d9;"> **Bài toán tách nguồn (source separation)** </span>]

Dữ liệu thu được tất nhiên có nhiễu, vì vậy $T$ trên thực tế sẽ có hạng tổng quát (generic rank), nhưng sẽ tồn tại một tensor hạng rất thấp $\tilde T$ xấp xỉ tốt $T$. (Đối với mọi không gian tensor phức, tồn tại một giá trị hạng xuất hiện với xác suất bằng một; giá trị này được gọi là *hạng tổng quát*.) Tuy nhiên, không có một metric tự nhiên nào gắn liền với dữ liệu, nên ý nghĩa chính xác của "xấp xỉ" ở đây không hoàn toàn rõ ràng.
Trong <a href="https://books.google.com.sg/books?hl=en&lr=&id=3cAxU0yH4fUC&oi=fnd&pg=PR5&dq=Multi-way+analysis:+Applications+in+the+chemical+sciences&ots=p8dbzRrIYc&sig=C08Yb881cKPluudk6UF6hKH_hms&redir_esc=y#v=onepage&q=Multi-way%20analysis%3A%20Applications%20in%20the%20chemical%20sciences&f=false" target="_blank" rel="noopener noreferrer">Multi-way analysis</a>, người ta tiến hành như sau để xác định $R$.

Trước hết, giả sử $R$ là khá nhỏ ($\leq 7$). Sau đó, với mỗi $r$, $1\leq r \leq 7$, ta giả định $r=R$ và áp dụng một thuật toán số nhằm tìm $r$ *thành phần* (tức là các tensor hạng-1) mà $\tilde T$ có thể được biểu diễn thành tổng của chúng. Những giá trị $r$ mà thuật toán không hội tụ nhanh sẽ bị loại bỏ. (Các tác giả lưu ý rằng quy trình này không được chứng minh chặt chẽ về mặt toán học, nhưng dường như hoạt động tốt trong thực tế; trong ví dụ đang xét, các giá trị $r$ bị loại đều quá lớn.)
Đối với các giá trị $r$ còn lại, người ta xem xét các tensor thu được để đánh giá xem chúng có hợp lý về mặt vật lý hay không. Điều này cho phép loại bỏ các giá trị $r$ quá nhỏ. Trong ví dụ, cuối cùng còn lại $r=4,5$.

Bây giờ giả sử $R$ đã được xác định. Vì $R$ tương đối nhỏ, nên (bỏ qua những trường hợp suy biến tầm thường) biểu diễn của $\tilde T$ dưới dạng tổng của $R$ tensor hạng-1 là duy nhất. Do đó, bằng cách thực hiện phân rã của $\tilde T$, ta có thể khôi phục nồng độ của từng chất trong số $R$ chất trong mỗi dung dịch thông qua việc xác định các vectơ $\bm{a}_r$, cũng như các phổ kích thích và phát xạ riêng lẻ bằng cách xác định các vectơ $\bm{b}_r, \bm{c}_r$.
:::

## Tích luỹ (Cumulant)
Trong thống kê, người ta thu thập dữ liệu với khối lượng lớn, được lưu trữ dưới dạng một mảng đa chiều, và tìm cách rút trích thông tin từ dữ liệu đó. Một dãy đại lượng quan trọng cần được rút ra từ các tập dữ liệu là các cumulant.

Giả sử $\Bbb R^n$ được trang bị một độ đo xác suất $\mathrm{d}\mu$, tức là một độ đo đủ "tốt" sao cho $\int_{\Bbb R^n}\mathrm{d}\mu=1$. Một hàm đo được $f:\Bbb R^n \to \Bbb R$ được gọi là <span style="color:#ff6e40;"><em>biến ngẫu nhiên</em></span>.</br>
<span style="color:#6b7280;"><em>(Tên gọi này xuất phát từ việc nếu ta chọn một "điểm ngẫu nhiên" $\bm{x}\in \Bbb R^n$ theo độ đo xác suất $\mu$, thì $f$ sẽ xác định một "giá trị ngẫu nhiên" $f(\bm{x})$.)</em></span>

Với một biến ngẫu nhiên $f$, ta ký hiệu 
$$
    \Bbb E[f] \coloneqq \int_{\Bbb R^n} f(\bm{x})\mathrm{d}\mu.
$$
Đại lượng $\Bbb E[f]$ được gọi là <span style="color:#ff6e40;"><em>kỳ vọng</em></span> (expectaion) hay <span style="color:#ff6e40;"><em>giá trị trung bình</em></span> (mean) của hàm $f$.



:::hint[<span style="color:#12a4d9;"> **Ví dụ thực tế của mean** </span>]
Chẳng hạn, xét một phân bố khối lượng trong không gian với các tọa độ $x^1, x^2, x^3$ và mật độ được cho bởi một độ đo xác suất $\mu$. (Mỗi hàm tọa độ có thể được xem như một biến ngẫu nhiên.) Khi đó, các tích phân
$$
    m^j\coloneqq \Bbb E[x^j] \coloneqq \int_{\Bbb R^3} x^j \mathrm{d}\mu.
$$
cho ta các tọa độ của trọng tâm (còn gọi là mean).
:::

Tổng quát, định nghĩa <span style="color:#ff6e40;"><em>mô-men</em></span> (moment) của các biến ngẫu nhiên $x^j$
$$
    m_{\bm{x}}^{i_1,\ldots,i_p}\coloneqq \Bbb E[x^{i_1}\cdots x^{i_p}]=\int_{\Bbb R^n}x^{i_1}\cdots x^{i_p}\mathrm{d}\mu.
$$

