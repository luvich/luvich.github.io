---
title: 'Tensors: Hình học và Ứng dụng - Giới thiệu - Đại số đa tuyến tính'
published: 2026-02-12
description: Ngó một chút về đại số đa tuyến tính
image: "./landsberg.jpg"
tags: [Toán, Tensor, Hình học, Ứng dụng, Mathematics, Geometry, Application, Đại số, Algebra, Đại số tuyến tính, Linear Algebra, Đại số đa tuyến tính, Multilinear Algebra]
category: Tensor
toc: true
draft: false
---

## Ánh xạ tuyến tính
### Không gian vector
Ký hiệu $\Bbb{C}^n$ là không gian vector các bộ $n$ số phức, tức là mỗi vector $\bm{v}$ trong $\Bbb{C}^n$ được viết dưới dạng $\bm{v}=(v_1,\ldots, v_n)$, với $v_j\in\Bbb{C}$.

Cấu trúc không gian vector của $\Bbb{C}^n$:
- Phép cộng: $\bm{v}+\bm{w} \in \Bbb{C}^n$, với mọi $\bm{v}, \bm{w} \in \Bbb{C}^n$, 
- Phép nhân với vô hướng: $\lambda\bm{v}\in\Bbb{C}^n$ với mọi $\bm{v} \in \Bbb{C}^n$ và $\lambda\in\Bbb{C}$. </br>
<span style="color:#6b7280;">Phép cộng và phép nhân với vô hướng ở đây thực hiện theo từng toạ độ.</span>


### Ánh xạ tuyến tính
Một ánh xạ $f:\Bbb{C}^n\to \Bbb{C}^m$ được gọi là <span style="color:#ff6e40;"><em>tuyến tính </em></span> nếu
- $f(\bm{v}+\bm{w})=f(\bm{v})+f(\bm{w})$ với mọi $\bm{v}, \bm{w} \in \Bbb{C}^n$,
- $f(\lambda\bm{v})=\lambda f(\bm{v})$ với mọi $\bm{v} \in \Bbb{C}^n$ và $\lambda\in\Bbb{C}$.

### Không gian vector đối ngẫu
Cho $V$ là một không gian vector. Ký hiệu
$$
A^* \coloneqq \left\lbrace f: V\to \Bbb{C} \mid f \text{ tuyến tính} \right\rbrace
$$
là <span style="color:#ff6e40;"><em>không gian vector đối ngẫu </em></span> của $V$.

Với $\alpha \in V^*$ và $\bm{w}\in W$, ta có thể dịnh nghĩa một ánh xạ tuyến tính cho bởi
$$
\alpha \otimes \bm{w}: V\to W,\qquad \bm{v} \mapsto \alpha(\bm{v})\bm{w}.
$$

Ánh xạ tuyến tính như vậy có <span style="color:#ff6e40;"><em>hạng-1</em></span>.

<span style="color:#ff6e40;"><em>Hạng</em></span> của một ánh xạ tuyến tính $f:V\to W$ là số $R$ nhỏ nhất sao cho tồn tại $\alpha_1,\ldots,\alpha_R \in V^*$ và $\bm{W}_1,\ldots,\bm{w}_R\in W$ sao cho $f=\sum_{r=1}^R \alpha_r\otimes \bm{w}_r$.


:::hint[<span style="color:#12a4d9;"> **Hạng của một ánh xạ tuyến tính** </span>]
Các định nghĩa sau đây về hạng của ánh xạ tuyến tính $f:V \to W$ là tương đương:
1. $\dim W$.
2. $\dim V - \dim (\ker f)$.
3. Số $R$ nhỏ nhất sao cho $f$ là tổng của $R$ ánh xạ tuyến tính hạng-1.</li>
4. Số $R$ nhỏ nhất sao cho mọi ma trận biểu diễn $f$ có định thức con cấp $R+1$ đều bằng $0$. </li>
5. Tồn tại các cách chọn cơ sở trong $V$ và $W$ sao cho ma trận của $f$ có dạng 
$$
\begin{bmatrix}
\bm{I}_R & 0\\
0 &0
\end{bmatrix}.
$$
:::


