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
> <span style="color:black">Bài viết repost từ </span> [blog wordpress](https://hoathekiet.wordpress.com/2023/12/16/chdeptrai-nhin-dai-so-tuyen-tinh-p1-khai-niem-vec-to/ 'blog wordpress') 

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

# Lăng kính đại số
Đại số sẽ quan tâm nhiều hơn về mặt cấu trúc của không gian. Do đó sẽ nhìn vector như một phần tử của tập hợp, một điểm trong không gian trừu tượng. Dưới lăng kính này, vector là một thứ gì đó không thực sự rõ ràng, không dễ dàng hình dung. Sự tồn tại của nó chỉ là sự thoả mãn các tiên đề xung quanh hai phép toán:
- Phép cộng giữa các vector: đảm bảo sự tương tác trong nội bộ không gian;
- Phép nhân với vô hướng: một tác động từ bên ngoài lên không gian.
Lúc này không gian được gọi là **không gian vector** trên trường $\mathbb{K}$ nào đó. (Định nghĩa chi tiết xem ở [đây] (https://en.wikipedia.org/wiki/Vector_space))
