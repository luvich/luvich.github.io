---
layout: post
title: "Đại số tuyến tính (P1): Vector"
author: "Luvich"
categories: 
  - Mathematics
  - Algebra
tags: [linear algebra, mathematics, đại số tuyến tính, vector]
image: vector_cover.svg.png
---

Chúng ta gặp khái niệm vector khá nhiều, đặc biệt đối với những ngành khoa học tự nhiên thì càng chẳng xa lạ gì. Một vector sẽ thế nào nếu nó đi qua một lăng kính thiểu năng (LKTN)?<br>
> <span style="color:black">Bài viết repost từ </span> <span style="color:blue">[blog wordpress](https://hoathekiet.wordpress.com/2023/12/16/chdeptrai-nhin-dai-so-tuyen-tinh-p1-khai-niem-vec-to/ 'blog wordpress') </span>

**Lực** (force) là một đại lượng vector. Điều này đã được nghe từ khi mới tiếp xúc với vật lý. Đương nhiên với tầm đó thì bỏ qua khái niệm mà chỉ thuộc lòng các đặt trưng của nó:<br>

<blockquote> <span style="color:black">
  Lực là một đại lượng vecto được biểu diễn bằng một mũi tên có:<br>
  – Gốc là điểm đặt của lực. <br>
  – Phương và chiều là phương và chiều của lực. <br>
  – Độ dài biểu diễn cường độ của lực theo một tỉ lệ xích cho trước. <br>
</span></blockquote>

Định nghĩa chính thức về vector ở lớp 10:<br>
<blockquote> <span style="color:black">
Vectơ là một đoạn thẳng có hướng. Vectơ có điểm đầu $A$, điểm cuối $B$ được kí hiệu là $\overrightarrow{AB}$ và đọc là "véc-tơ $AB$".
</span></blockquote> 

Nhưng dường như vector là những gì hơn thế. Qua những lăng kính khác nhau, dáng vẻ của nó cũng khác nhau.

# 1. Lăng kính đại số
Đại số sẽ quan tâm nhiều hơn về mặt cấu trúc của không gian. Do đó sẽ nhìn vector như một phần tử của tập hợp, một điểm trong không gian trừu tượng. Dưới lăng kính này, vector là một thứ gì đó không thực sự rõ ràng, không dễ dàng hình dung. Sự tồn tại của nó chỉ là sự thoả mãn các tiên đề xung quanh hai phép toán:
- Phép cộng giữa các vector: đảm bảo sự tương tác trong nội bộ không gian;
- Phép nhân với vô hướng: một tác động từ bên ngoài lên không gian.
Lúc này không gian được gọi là **không gian vector** trên trường $\mathbb{K}$ nào đó. (Định nghĩa chi tiết xem ở <span style="color:blue">[đây](https://en.wikipedia.org/wiki/Vector_space)</span> <a href="https://en.wikipedia.org/wiki/Vector_space" style="color: blue;">đây</a>).

Ở đây ta sẽ lấy ví dụ cho dễ tưởng tượng.
<ol type="a">
  <li>
    Không gian các số thực trên trường $\mathbb{Q}$ là một không gian vector, trong đó
    <ul>
      <li>Phép cộng: cũng chính là phép cộng trên $\mathbb{R}$, nếu $a,b\in \mathbb{R}$ thì $a+b\in\mathbb{R}$;</li>
      <li>Phép nhân với vô hướng: phép nhân một số thực bởi một số hữu tỷ, nếu $q\in\mathbb{Q}$ và $a\in\mathbb{R}$ thì $qa\in\mathbb{R}$.</li>
    </ul>
    Trong không gian này, mỗi số thực là một vector.
  </li>
  <li>Item B</li>
  <li>Item C</li>
</ol>
- Không gian các số thực trên trường $\mathbb{Q}$ là một không gian vector, trong đó
  - Phép cộng: cũng chính là phép cộng trên $\mathbb{R}$, nếu $a,b\in \mathbb{R}$ thì $a+b\in\mathbb{R}$;
  - Phép nhân với vô hướng: phép nhân một số thực bởi một số hữu tỷ, nếu $q\in\mathbb{Q}$ và $a\in\mathbb{R}$ thì $qa\in\mathbb{R}$
    Trong không gian này, mỗi số thực là một vector.
- "Không gian" (xin phép lạm dụng từ không gian) các số hữu tỷ trên trường $\mathbb{R}$ **không** là một không gian vector, vì phép nhân một số hữu tỷ bởi một số thực đã "ra ngoài không gian", nếu $\lambda \in \mathbb{R}$ và $q\in \mathbb{Q}$ thì $\lambda q$ có thể không còn là số thực nữa. Vậy nên các số hữu tỷ cùng với phép toán này không thể cấu thành một không gian vector.
- Cho tập hợp $V=\left\lbrace \mathrm{Luvich} \right\rbrace$. Định nghĩa phép toán như sau:
  - Phép cộng: $\mathrm{Luvich} + \mathrm{Luvich}=\mathrm{Luvich}$, chỉ có một phần tử thôi, và quy định nó cộng chính nó bằng chính nó;
  - Phép nhân với vô hướng: với mọi $\lambda \in \mathbb{K}$, định nghĩa $\lambda \cdot \mathrm{Luvich}=\mathrm{Luvich}$, nghĩa là mọi tác động bên ngoài đều không thay đổi phần tử ấy.
    Có thể kiểm tra được rằng không gian này thoả mãn mọi tiên đề của không gian vector, do đó $V$ là một không gian vector.

Ở trên là sự nguỵ biện, trá hình cho một không gian vector hữu hạn duy nhất. Thực tế là 
> <span style="color:black"> Không có không gian vector nào chứa *hữu hạn* phần tử ngoài không gian chỉ chứa vectơ $0$!
</span>



# 2. Lăng kính hình học
Lăng kính này cũng liên quan đến không gian, nhưng để dễ hình dung hơn, ta thêm vào không gian một điểm 
