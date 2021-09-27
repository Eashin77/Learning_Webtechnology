<?php
function FindingLargeNumber($x, $y, $z) 
{
  $max = max($x, max($y, $z));
  return $max;
}

echo FindingLargeNumber(10, 20, 30);

?>