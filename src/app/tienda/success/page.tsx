import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Package, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen pt-20 pb-12 flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-lg">
        <Card className="bg-card border-border">
          <CardContent className="p-8 text-center">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-500" />
            </div>

            <Badge className="mb-4 bg-green-500/20 text-green-400">
              ¡Pedido Confirmado!
            </Badge>

            <h1 className="text-2xl font-bold mb-4">
              ¡Gracias por tu compra!
            </h1>

            <p className="text-muted-foreground mb-6">
              Tu pedido ha sido procesado correctamente. Recibirás un email de
              confirmación con los detalles de tu compra y el seguimiento del envío.
            </p>

            <div className="flex items-center justify-center gap-2 p-4 bg-secondary/30 rounded-lg mb-6">
              <Package className="h-5 w-5 text-primary" />
              <span className="text-sm">
                Envío estimado: <strong>2-4 días laborables</strong>
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="/tienda">
                  Seguir comprando
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Volver al inicio
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
