---
title: 'Tensors: Hình học và Ứng dụng - P2.2 - Đại số đa tuyến tính - Tích tensor'
published: 2026-03-01
description: Một số kết quả trong đại số tuyến tính
image: "./landsberg.jpg"
tags: [Toán, Tensor, Hình học, Ứng dụng, Mathematics, Geometry, Application, Đại số, Algebra, Đại số tuyến tính, Linear Algebra, Đại số đa tuyến tính, Multilinear Algebra, Tensor Decomposition, Phân rã tensor, Tensor product, Tích tensor]
category: Tensor
toc: true
draft: false
---

:::hint[]
Trong vật lý, kỹ thuật và các lĩnh vực khác, tensor thường được định nghĩa
như các mảng nhiều chiều. Ngay cả một ánh xạ tuyến tính cũng thường
được định nghĩa thông qua một ma trận biểu diễn nó theo một cơ sở đã chọn.

Xét chẳng hạn không gian các ma trận kích thước $n \times n$, trước hết
như biểu diễn không gian các ánh xạ tuyến tính $V \to W$, trong trường hợp
$\dim V = \dim W = n$. Khi đó, với $f : V \to W$, ta luôn có thể thay đổi cơ sở của $V$
và $W$ sao cho ma trận của $f$ có dạng
$$
\begin{pmatrix}
\bm{I}_k & 0 \\
0 & 0
\end{pmatrix},
$$
trong đó phép chia khối có kích thước $(k, n-k) \times (k, n-k)$,
vì vậy chỉ có $n$ ánh xạ khác nhau như thế (tính đến tương đương).

Mặt khác, nếu không gian các ma trận $n \times n$ biểu diễn các ánh xạ
tuyến tính $V \to V$, thì ta chỉ có thể đưa về dạng chuẩn Jordan
(hoặc dạng chuẩn hữu tỉ), tức là có cả một họ tham số các ma trận
không tương đương với nhau.

Chúng ta theo dõi tác động của nhóm
(group actions) là điều thiết yếu, vì thế tốt hơn là đưa ra các định nghĩa
không phụ thuộc vào việc chọn cơ sở cho ánh xạ tuyến tính và tensor.
:::

## Định nghĩa
Ký hiệu $V^*\otimes W$ cho không gian vector các ánh xạ tuyến tính $V \to W$. Do đó, $V\otimes W$ ký hiệu không gian các ánh xạ tuyến tính $V^* \to W$.

Không gian $V^*\otimes W$  có thể được hiểu theo 4 cách sau:
1. không gian các ánh xạ tuyến tính $V\to W$,
2. không gian các ánh xạ tuyến tính $W^* \to V$ (sử dụng đẳng cấu xác định bởi phép lấy chuyển vị),
3. không gian vector đối ngẫu của $V\otimes W^*$,
4. không gian các ánh xạ song tuyến tính $V\times W^* \to \Bbb C$.

Ta chọn các cơ sở và biểu diễn $f\in V^*\otimes W$ bởi ma trận kích thước $n\times m$ (với $\dim V =n,\;\dim W=m$): $\bm{X}=(f^i_s)$. Khi đó, tương ứng với từng cách hiểu ở trên, ta có các tác động:
1. bởi phép nhân bởi một vector cột $\bm{v} \mapsto \bm{X}\bm{v}$,
2. bởi phép nhân phải bởi một vector hàng $\beta \mapsto \beta \bm{X}$,
3. bởi $\bm{Y} \mapsto \sum_{i,s}f^i_sg^s_i = \operatorname{trace}(\bm{X}\bm{Y})$, với $\bm{Y}=(g^s_i)$ là ma trận $m\times n$,
4. bởi $(\bm{v},\beta)\mapsto \sum_{i,s} f^i_s v_i \beta^s$

:::hint[**Giải thích**]
1. Ở đây ta có đẳng cấu 
$$
    V^*\otimes W \cong \operatorname{Hom}(V,W).
$$
Một tensor $f=\alpha \otimes \bm{w}$ tác động lên $\bm{v}\in V$ bởi $(\alpha\otimes \bm{w})(\bm{v}) = \alpha(\bm{v})\bm{w}\in W$. Khi chọn cơ sở, nó trở thành nhân ma trận với vector cột $\bm{v} \mapsto \bm{X}\bm{v}$.

2. Mỗi ánh xạ $f:V\times W$ có ánh xạ chuyển vị $f^\top: W^*\to V^*$. Do đó ta có thể hiểu phần tử đó như ánh xạ tác động lên covector: $\beta \mapsto \beta \bm{X}$.

3. Ta có đẳng cấu 
$$
    V^*\otimes W \cong (V\otimes W^*)^*.
$$
Tức là ta xem ánh xạ tuyến tính $f :V\to W$ như một phiếm hàm tuyến tính $f:V\otimes W^* \to \Bbb C$ được xác định bởi $\bm{Y} \mapsto \sum_{i,s}f^i_sg^s_i = \operatorname{trace}(\bm{X}\bm{Y})$, trong đó $\bm{Y}=(g^s_i)$ là ma trận $m\times n$ biểu diễn phần tử trong $V\otimes W^*$.

4. Ta có đẳng cấu 
$$
    V^*\otimes W \cong \mathcal{L}(V,W^*;\Bbb C),
$$
với $(\bm{v},\beta)\mapsto \beta(f(\bm{v}))$. Khi chọn cơ sở, ta được $\beta \bm{X} \bm{v} = \sum_{i,s}f^i_s v_i \beta^s$
:::

:::hint[]
Các phần tử hạng-1 trong $V \otimes W$ sinh ra toàn bộ $V \otimes W$. Cụ thể, nếu $(\bm v_i)$ là cơ sở của $V$ và $(\bm w_s)$ là cơ sở của $W$, khi đó các tensor $\bm v_i \otimes \bm w_s$ tạo thành một cơ sở của $V \otimes W$.
:::

