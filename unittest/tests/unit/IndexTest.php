<?php

use PHPUnit\Framework\TestCase;
require './src/Index.php';

class IndexTest extends TestCase
{
    public function testcommonFactorZero()
    {
        $controller = new Index();
        $result = $controller->commonFactor(0);
        $this->assertEquals(1, $result);
    }

    public function testcommonFactorOne()
    {
        $controller = new Index();
        $result = $controller->commonFactor(1);
        $this->assertEquals(1, $result);
    }

    public function testcommonFactorFive()
    {
        $controller = new Index();
        $result = $controller->commonFactor(5);
        $this->assertEquals(120, $result);
    }

    public function testcommonFactorRandomInt()
    {
        $controller = new Index();
        $randomInt = mt_rand(4, 100); 
        $expectedResult = $controller->commonFactor($randomInt - 1) * $randomInt;
        $result = $controller->commonFactor($randomInt);
        $this->assertEquals($expectedResult, $result);
    }

    public function testcommonFactorNegative()
    {
        $controller = new Index();
        $result = $controller->commonFactor(-3);
        $this->assertNull($result);
    }

    public function testcommonFactorFloat()
    {
        $controller = new Index();
        $result = $controller->commonFactor(1.5);
        $this->assertNull($result);
    }

    public function testcommonFactorFalse()
    {
        $controller = new Index();
        $result = $controller->commonFactor(false);
        $this->assertNull($result);
    }

    public function testcommonFactorString()
    {
        $controller = new Index();
        $result = $controller->commonFactor('abc');
        $this->assertNull($result);
    }
}


?>