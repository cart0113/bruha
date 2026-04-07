# Math Equations

Bruha supports LaTeX math rendering via [KaTeX](https://katex.org/). Enable it
in `bruha.json`:

```json
{
  "katex": true
}
```

Use `$...$` for inline math and `$$...$$` for display (block) math.

## Inline Math

```markdown
The quadratic formula $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$ renders inline.
```

The quadratic formula $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$ renders inline.

```markdown
Euler's identity $e^{i\pi} + 1 = 0$ connects five fundamental constants.
```

Euler's identity $e^{i\pi} + 1 = 0$ connects five fundamental constants.

## Display Equations

```markdown
$$\int_{-\infty}^{\infty} e^{-x^2} \, dx = \sqrt{\pi}$$
```

$$\int_{-\infty}^{\infty} e^{-x^2} \, dx = \sqrt{\pi}$$

```markdown
$$\nabla \cdot \mathbf{E} = \frac{\rho}{\varepsilon_0}$$
```

$$\nabla \cdot \mathbf{E} = \frac{\rho}{\varepsilon_0}$$

```markdown
$$\nabla \times \mathbf{B} = \mu_0 \mathbf{J} + \mu_0 \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t}$$
```

$$\nabla \times \mathbf{B} = \mu_0 \mathbf{J} + \mu_0 \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t}$$

## Matrices

```markdown
$$R(\theta) = \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}$$
```

$$R(\theta) = \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}$$

```markdown
$$I_3 = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}$$
```

$$I_3 = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}$$

```markdown
$$\begin{bmatrix} a & b \\ c & d \end{bmatrix} \begin{bmatrix} e & f \\ g & h \end{bmatrix} = \begin{bmatrix} ae + bg & af + bh \\ ce + dg & cf + dh \end{bmatrix}$$
```

$$\begin{bmatrix} a & b \\ c & d \end{bmatrix} \begin{bmatrix} e & f \\ g & h \end{bmatrix} = \begin{bmatrix} ae + bg & af + bh \\ ce + dg & cf + dh \end{bmatrix}$$

```markdown
$$A = \begin{bmatrix} 1 & 2 & 3 & 4 & 5 \\ 6 & 7 & 8 & 9 & 10 \\ 11 & 12 & 13 & 14 & 15 \\ 16 & 17 & 18 & 19 & 20 \\ 21 & 22 & 23 & 24 & 25 \end{bmatrix}, \quad A^{-1} = \frac{1}{\det(A)} \operatorname{adj}(A)$$
```

$$A = \begin{bmatrix} 1 & 2 & 3 & 4 & 5 \\ 6 & 7 & 8 & 9 & 10 \\ 11 & 12 & 13 & 14 & 15 \\ 16 & 17 & 18 & 19 & 20 \\ 21 & 22 & 23 & 24 & 25 \end{bmatrix}, \quad A^{-1} = \frac{1}{\det(A)} \operatorname{adj}(A)$$

```markdown
$$T = \begin{pmatrix} \cos\alpha\cos\beta & \cos\alpha\sin\beta\sin\gamma - \sin\alpha\cos\gamma & \cos\alpha\sin\beta\cos\gamma + \sin\alpha\sin\gamma & t_x \\ \sin\alpha\cos\beta & \sin\alpha\sin\beta\sin\gamma + \cos\alpha\cos\gamma & \sin\alpha\sin\beta\cos\gamma - \cos\alpha\sin\gamma & t_y \\ -\sin\beta & \cos\beta\sin\gamma & \cos\beta\cos\gamma & t_z \\ 0 & 0 & 0 & 1 \end{pmatrix}$$
```

$$T = \begin{pmatrix} \cos\alpha\cos\beta & \cos\alpha\sin\beta\sin\gamma - \sin\alpha\cos\gamma & \cos\alpha\sin\beta\cos\gamma + \sin\alpha\sin\gamma & t_x \\ \sin\alpha\cos\beta & \sin\alpha\sin\beta\sin\gamma + \cos\alpha\cos\gamma & \sin\alpha\sin\beta\cos\gamma - \cos\alpha\sin\gamma & t_y \\ -\sin\beta & \cos\beta\sin\gamma & \cos\beta\cos\gamma & t_z \\ 0 & 0 & 0 & 1 \end{pmatrix}$$

## Linear Algebra

```markdown
$$A\mathbf{v} = \lambda\mathbf{v}$$
```

$$A\mathbf{v} = \lambda\mathbf{v}$$

```markdown
$$\det(A) = \begin{vmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{vmatrix}$$
```

$$\det(A) = \begin{vmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{vmatrix}$$

```markdown
$$A = U \Sigma V^T$$
```

$$A = U \Sigma V^T$$

## Summations and Products

```markdown
The Taylor series for $e^x$:

$$e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!}$$
```

The Taylor series for $e^x$:

$$e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!}$$

```markdown
$$\zeta(s) = \sum_{n=1}^{\infty} \frac{1}{n^s} = \prod_{p \text{ prime}} \frac{1}{1 - p^{-s}}$$
```

$$\zeta(s) = \sum_{n=1}^{\infty} \frac{1}{n^s} = \prod_{p \text{ prime}} \frac{1}{1 - p^{-s}}$$

```markdown
$$(x + y)^n = \sum_{k=0}^{n} \binom{n}{k} x^{n-k} y^k$$
```

$$(x + y)^n = \sum_{k=0}^{n} \binom{n}{k} x^{n-k} y^k$$

## Calculus

```markdown
$$\frac{d}{dx} \int_a^x f(t) \, dt = f(x)$$
```

$$\frac{d}{dx} \int_a^x f(t) \, dt = f(x)$$

```markdown
$$\oint_{\partial \Omega} \omega = \int_{\Omega} d\omega$$
```

$$\oint_{\partial \Omega} \omega = \int_{\Omega} d\omega$$

```markdown
$$\nabla^2 f = \frac{1}{r^2} \frac{\partial}{\partial r}\left(r^2 \frac{\partial f}{\partial r}\right) + \frac{1}{r^2 \sin\theta} \frac{\partial}{\partial \theta}\left(\sin\theta \frac{\partial f}{\partial \theta}\right) + \frac{1}{r^2 \sin^2\theta} \frac{\partial^2 f}{\partial \phi^2}$$
```

$$\nabla^2 f = \frac{1}{r^2} \frac{\partial}{\partial r}\left(r^2 \frac{\partial f}{\partial r}\right) + \frac{1}{r^2 \sin\theta} \frac{\partial}{\partial \theta}\left(\sin\theta \frac{\partial f}{\partial \theta}\right) + \frac{1}{r^2 \sin^2\theta} \frac{\partial^2 f}{\partial \phi^2}$$

## Statistics and Probability

```markdown
$$f(x) = \frac{1}{\sigma\sqrt{2\pi}} \exp\left(-\frac{(x - \mu)^2}{2\sigma^2}\right)$$
```

$$f(x) = \frac{1}{\sigma\sqrt{2\pi}} \exp\left(-\frac{(x - \mu)^2}{2\sigma^2}\right)$$

```markdown
$$P(A \mid B) = \frac{P(B \mid A) \, P(A)}{P(B)}$$
```

$$P(A \mid B) = \frac{P(B \mid A) \, P(A)}{P(B)}$$
