---
layout: post
title: "Đại số tuyến tính (P1): Vector"
author: "Luvich"
categories: 
  - mathematics
  - algebra
  - linear-algebra
tags: [linear algebra, mathematics, đại số tuyến tính, vector]
image: vector_cover.svg.png
toc: true
toc_label: "Table of Contents"
toc_icon: "icon"
---

<span style="font-size: 20pt; font-weight: bold; color: #2F2A85;">Mục lục</span>

* toc
{:toc}

# Giới thiệu
Chúng ta gặp khái niệm vector khá nhiều, đặc biệt đối với những ngành khoa học tự nhiên thì càng chẳng xa lạ gì. Một vector sẽ thế nào nếu nó đi qua một lăng kính thiểu năng (LKTN)?<br>
> <span style="color:black">Bài viết repost từ <a href="https://hoathekiet.wordpress.com/2023/12/16/chdeptrai-nhin-dai-so-tuyen-tinh-p1-khai-niem-vec-to/" style="color: blue;">blog wordpress</a> </span>

<span style="font-weight: bold; color: #2F2A85;">Lực</span> (*force*) là một đại lượng vector. Điều này đã được nghe từ khi mới tiếp xúc với vật lý. Đương nhiên với tầm đó thì bỏ qua khái niệm mà chỉ thuộc lòng các đặt trưng của nó:<br>

<blockquote> <span style="color:black">
  Lực là một đại lượng vector được biểu diễn bằng một mũi tên có:<br>
  – Gốc là điểm đặt của lực. <br>
  – Phương và chiều là phương và chiều của lực. <br>
  – Độ dài biểu diễn cường độ của lực theo một tỉ lệ xích cho trước. <br>
</span></blockquote>

Định nghĩa chính thức về vector ở lớp 10:<br>
<blockquote> <span style="color:black">
Vectơ là một đoạn thẳng có hướng. Vectơ có điểm đầu $A$, điểm cuối $B$ được kí hiệu là $\overrightarrow{AB}$ và đọc là "véc-tơ $AB$".
</span></blockquote> 

Nhưng dường như vector là những gì hơn thế. Qua những lăng kính khác nhau, dáng vẻ của nó cũng khác nhau.

Chúng ta cũng nên điểm qua về định nghĩa của một không gian vector.

Một <span style="font-weight: bold; color: #FF6E40;">không gian vector</span> trên trường $\mathbb{K}$ là một tập hợp khác rỗng $V$ cùng với hai phép toán, gồm:
+  <span style="font-weight: bold; color: #2F2A85;">Phép cộng vector</span> (trong series này, sẽ gọi tắt là *phép cộng*):
  
$$
\begin{array}{rl}
+:V\times V &\to V,\\
(a,b)&\mapsto a+b
\end{array}
$$

+  <span style="font-weight: bold; color: #2F2A85;">Phép nhân vector với vô hướng</span> (trong series này, sẽ gọi tắt là *phép nhân*):

  
$$
\begin{array}{rl}
\cdot:\mathbb{K}\times V &\to V,\\
(\lambda,b)&\mapsto \lambda a
\end{array}
$$

Các phép toán này thoả mãn các tiên đề đảm bảo rằng:
+ $V$ cùng với phép cộng là một nhóm giao hoán,
+ Phép nhân có tính phân phối với với cộng trên $\mathbb{K}$ và phép cộng trên $V$, có tính chất của một tác động (action) và được chuẩn hoá.

(Xem chi tiết ở <a href="https://en.wikipedia.org/wiki/Vector_space" style="color: blue;">đây</a>).

Hơn nữa, một tập con khác rỗng $W\subset V$ được gọi là một <span style="font-weight: bold; color: #FF6E40;">không gian vector con</span> của $V$ nếu $W$ khép kín với hai phép toán trên. Khép kín có thể được hiểu là kết quả của phép toán không "vượt ra ngoài không gian".


# 1. Lăng kính đại số
Đại số sẽ quan tâm nhiều hơn về mặt cấu trúc của không gian. Do đó sẽ nhìn vector như một phần tử của tập hợp, một điểm trong không gian trừu tượng. Dưới lăng kính này, vector là một thứ gì đó không thực sự rõ ràng, không dễ dàng hình dung. Sự tồn tại của nó chỉ là sự thoả mãn các tiên đề xung quanh hai phép toán:
- *Phép cộng:* đây là một tác động của một vector lên một vector khác, cho ra kết quả vẫn là một vector;
- *Phép nhân:* một tác động từ bên ngoài lên không gian và cho kết quả là một vector.
  
Lúc này không gian được gọi là <span style="font-weight: bold; color: #2F2A85;">không gian vector</span> trên trường $\mathbb{K}$ nào đó. 

Ở đây ta sẽ lấy ví dụ cho dễ tưởng tượng.
<ol type="a">
  <li>
    Không gian các số thực $\mathbb{R}$ trên trường $\mathbb{Q}$ là một không gian vector, trong đó
    <ul>
      <li><i>Phép cộng:</i> cũng chính là phép cộng trên $\mathbb{R}$, nếu $a,b\in \mathbb{R}$ thì $a+b\in\mathbb{R}$;</li>
      <li><i>Phép nhân:</i> phép nhân một số thực bởi một số hữu tỷ, nếu $q\in\mathbb{Q}$ và $a\in\mathbb{R}$ thì $qa\in\mathbb{R}$.</li>
    </ul>
    Trong không gian này, mỗi số thực là một vector.
  </li>
  <li>
    "Không gian" (xin phép lạm dụng từ không gian) các số hữu tỷ $\mathbb{Q}$ trên trường $\mathbb{R}$ <span style="font-weight: bold; color: #D71B3B;">không</span> là một không gian vector, vì phép nhân một số hữu tỷ bởi một số thực đã "ra ngoài không gian": nếu $\lambda \in \mathbb{R}$ và $q\in \mathbb{Q}$ thì $\lambda q$ có thể không còn là số hữu tỷ nữa. Vậy nên các số hữu tỷ cùng với phép toán này không thể cấu thành một không gian vector.
  </li>
  <li>
    Cho tập hợp $V=\left\lbrace \mathrm{Luvich} \right\rbrace$. Định nghĩa phép toán như sau:
    <ul>
      <li><i>Phép cộng:</i> $\mathrm{Luvich} + \mathrm{Luvich}=\mathrm{Luvich}$, chỉ có một phần tử thôi, và quy định nó cộng chính nó bằng chính nó;</li>
      <li><i>Phép nhân:</i> với mọi $\lambda \in \mathbb{K}$, định nghĩa $\lambda \cdot \mathrm{Luvich}=\mathrm{Luvich}$, nghĩa là mọi tác động bên ngoài đều không thay đổi phần tử ấy.</li>
    </ul>
    Có thể kiểm tra được rằng không gian này thoả mãn mọi tiên đề của không gian vector, do đó $V$ là một không gian vector.
    Ở trên là sự nguỵ biện, trá hình cho một không gian vector hữu hạn duy nhất. Thực tế là
    <blockquote>
        <p><span style="color:black"><strong>Note:</strong> Không có không gian vector nào chứa <em>hữu hạn</em> phần tử ngoài không gian chỉ chứa vectơ $\mathbf{0}$.</span></p>
    </blockquote>
  </li>
</ol>




# 2. Lăng kính hình học
Lăng kính này cũng liên quan đến không gian, nhưng để dễ hình dung hơn, có một điểm gọi là điểm gốc, vector là những "mũi tên" nối từ điểm gốc này đến những điểm khác. Mối liên hệ giữa hai góc nhìn đại số và hình học như sau:
  - Phép cộng $\longleftrightarrow$ <span style="color: #12A4D9;">phép tịnh tiến</span>.<br>
  Cụ thể, kết quả của phép cộng $\vec{v}+\vec{w}$ việc tịnh tiến vector $\vec{v}$ theo vector $\vec{w}$.
  - Phép nhân $\longleftrightarrow$ <span style="color: #12A4D9;">phép vị tự</span>.<br>
  Độ lớn của vô hướng là tỉ số vị tự, dấu của vô hướng là hướng vị tự. Trường hợp vô hướng bằng $0$ thì mọi thứ đưa về vector $\mathbf{0}$.

Qua lăng kính này, mỗi vector sẽ được đặc trưng bởi <b>hướng</b> và <b>độ dài</b>. Thấy rằng lực hay chương trình phổ thông nhìn vector qua lăng kính hình học. Đặc trưng này rất quan trọng, nó sẽ liên quan đến spans hay eigenspaces.

<img src="https://media5.datahacker.rs/2020/03/Picture38-1024x473.jpg" alt="Phép cộng và phép nhân" style="width:100%;">



# 3. Lăng kính kỹ thuật + thiểu năng
Khi nói về một thứ gì đó trừu tượng, ta thường tìm cách biểu diễn chúng dưới những hình thức khác. Số hoá là một cách. Qua lăng kính này:
<table border="1"> <!-- Thêm border để dễ quan sát các ô trong bảng -->
  <tr>
    <th>Không gian vector</th>
    <th> </th>
    <th>Màn hình</th>
  </tr>
  <tr>
    <td>Cơ sở</td> 
    <td>$\longleftrightarrow$</td> 
    <td>Các camera</td>
  </tr>
  <tr>
    <td>Hệ trục toạ độ</td>
    <td>$\longleftrightarrow$</td>
    <td>Vị trí sắp xếp các camera</td>
  </tr>
  <tr>
    <td>Toạ độ của vector</td>
    <td>$\longleftrightarrow$</td>
    <td>Hình ảnh xuất hiện trên màn hình</td>
  </tr>
</table>

Lúc này ta nhìn vào một không gian vector thông qua một "màn hình" mà ở đó hình ảnh xuất hiện chính là thứ ta gọi là <span style="font-weight: bold; color: #2F2A85;">toạ độ của vector</span>. 
Khi ta thay đổi cơ sở của không gian vector, các hệ trục toạ độ cũng thay đổi nghĩa là ta đặt các camera theo các vị trí khác, do đó hình ảnh thu được cũng không còn như ban đầu. Lúc này thứ xuất hiện trên màn hình cũng khác đi. Như vậy, toạ độ của vector đối với cơ sở này khác với toạ độ của nó trong một cơ sở khác; giống như hình ảnh của vật thể sẽ bị khác đi nếu thay đổi camera (đặt ở các vị trí khác), mặc dù vẫn là vật thể đó, nhưng dáng vẻ của nó trông sẽ khác đi.<br>

<img src="https://navori.com/wp-content/uploads/2022/08/Digital-Signage-be-Used.jpg" alt="Vector như hình ảnh trên màn hình" style="width:100%;">

# Recap
Tóm lại, qua LKTN vector được nhìn thông qua một màn hình, ở đó vector là hình ảnh thu được từ các camera (do đó luôn luôn lưu ý đến cơ sở của một không gian vector, tức là lưu ý đến việc ta đang nhìn không gian vector từ các camera nào).




