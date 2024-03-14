<?php

class Index
{
    public function commonFactor($n)
    {
        if (!is_int($n) || $n < 0) {
            return null;
        }

        if ($n == 0 || $n == 1) {
            return 1;
        }

        return $n * $this->commonFactor($n - 1);
    }
}

?>
